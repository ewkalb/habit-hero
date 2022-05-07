import React, { useState, useEffect } from 'react'
import './App.css';
import Habit from './components/Habit';
import DayScoreBar from './components/DayScoreBar';
import WeekScoreBar from './components/WeekScoreBar';

import { habitsObject } from "./files/habitsObject"


////////////////////////TASKS/////////////////////////////////////
  ////////RESET AFTER ONE DAY
  ////////RESET AFTER TIMEOUT HOURS
  ////////NETLIFY
  ////////FORM FOR BUILDING NEW HABIT OBJECTS
  ////////REACT ROUTER TO PULL UP FORM PAGE + NEW USER PAGE
  ////////LOGIN + RETRIEVE DIFFERENT OBJECTS
  ////////CLICKY LABELS
//////////////////////////////////////////////////////////////////

function App() {

  const [habitState, setHabitState] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(habitsObject.user))
    return saved || {
      user: habitsObject.user,
      date: new Date().toLocaleDateString(),
      habits: habitsObject.habits,
      score: {
      dayScore: habitsObject.score.dayScore,
      dayGoal: habitsObject.score.dayGoal,
      weekScore: habitsObject.score.weekScore,
      weekGoal: habitsObject.score.weekGoal,
      lastDay: habitsObject.score.lastDay
    }
    }
  })


  ///not quite updating correctly yet, keep playing with it

function hasOneDayPassed() {
  var date = new Date().toLocaleDateString();
  console.log(date)
  let storedDate = JSON.parse(localStorage.eric).date

  if (storedDate === date)
    return false;
  return true

}

function resetDay() {
  const keepWeekScore = habitState.score.weekScore;
  setHabitState(() => {
    let newState = JSON.parse(JSON.stringify(habitsObject))
    newState.date = new Date().toLocaleDateString();
    newState.score.weekScore = keepWeekScore;
    return {...newState}
  })
  window.location.reload(false);
}

function resetWeek() {
  setHabitState(() => {
    let newState = JSON.parse(JSON.stringify(habitsObject))
    newState.date = new Date().toLocaleDateString();
    return {...newState}
  })
  window.location.reload(false);
}


function handleChange(event) {
  const {checked} = event.target
  const habitsIndex = event.target.parentElement.parentElement.id - 1
  const itemIndex = event.target.id - 1

  setHabitState((prevHabitState) => {
    let newState = JSON.parse(JSON.stringify(prevHabitState))
    newState.habits[habitsIndex].items[itemIndex].complete = checked;
    newState.date = new Date().toLocaleDateString();
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

      <button className='reset day' onClick={resetDay}><b>End Day</b></button>
      <button className='reset week' onClick={resetWeek}><b>End Week</b></button>


    </div>
  );
}

export default App;
