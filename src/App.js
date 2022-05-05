import React, { useState, useEffect } from 'react'
import './App.css';
import Habit from './components/Habit';
import DayScoreBar from './components/DayScoreBar';
import WeekScoreBar from './components/WeekScoreBar';

import { habitsObject } from "./files/habitsObject"


function App() {

  const [habitState, setHabitState] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(habitsObject.user))
    return saved || {
      user: habitsObject.user,
      habits: habitsObject.habits,
      score: {
      dayScore: habitsObject.score.day,
      dayGoal: habitsObject.score.dayGoal,
      weekScore: habitsObject.score.week,
      weekGoal: habitsObject.score.weekGoal,
      lastDay: habitsObject.score.lastDay
    }
    }
  })

function handleChange(event) {
  const {checked} = event.target
  const habitsIndex = event.target.parentElement.parentElement.id - 1
  const itemIndex = event.target.id - 1

  ////////FIX LABEL BUG
  ////////RESET BUTTON
  ////////RESET AFTER TIMEOUT HOURS
  ////////NETLIFY
  ////////FORM FOR BUILDING NEW HABIT OBJECTS
  ////////LOGIN + RETRIEVE DIFFERENT OBJECTS



  setHabitState((prevHabitState) => {
    let newState = JSON.parse(JSON.stringify(prevHabitState))
    newState.habits[habitsIndex].items[itemIndex].complete = checked;
    return {
      ...newState,
    }
    })

  setHabitState((prevHabitState) => {
    const dayScore = prevHabitState.score.dayScore
    const weekScore = prevHabitState.score.weekScore
    let newState = JSON.parse(JSON.stringify(prevHabitState))
    newState.score.dayScore = checked ? dayScore + 10 : dayScore - 10
    newState.score.weekScore = checked ? weekScore + 10 : weekScore - 10
    return {
      ...newState
    }
  })
}

  useEffect(() => {
    localStorage.setItem(habitState.user, JSON.stringify(habitState))

  }, [habitState]);

const habitElements = habitState.habits.map(habit => (
  <Habit
    key={habit.habitId}
    habitId={habit.habitId}
    habit={habit.habit}
    timeout={habit.timeout}
    type={habit.type}
    items={habit.items}
    handleChange={handleChange}
  />
))


  return (
    <div className="App">

      {habitElements}

      <DayScoreBar 
        score={habitState.score.dayScore}
        scoreGoal={habitState.score.dayGoal}
      />

      <WeekScoreBar 
        score={habitState.score.weekScore}
        scoreGoal={habitState.score.weekGoal}
      />

    </div>
  );
}

export default App;
