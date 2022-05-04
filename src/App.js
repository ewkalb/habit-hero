import React, { useState } from 'react'
import './App.css';
import Habit from './components/Habit';
import DayScoreBar from './components/DayScoreBar';
import WeekScoreBar from './components/WeekScoreBar';
import { habitsObject } from "./files/habitsObject"


function App() {

const [habitState, setHabitState] = useState(
  {
    habits: habitsObject.habits,
  }
)

const [score, setScore] = useState(
  {
    dayScore: habitsObject.score.day,
    dayGoal: habitsObject.score.dayGoal,
    weekScore: habitsObject.score.week,
    weekGoal: habitsObject.score.weekGoal,
    lastDay: habitsObject.score.lastDay
  }
)
function handleChange(event) {
  const habitsIndex = event.target.parentElement.parentElement.id - 1
  const itemIndex = event.target.id - 1
  setHabitState(prevHabitState => {
    const changedBox = prevHabitState.habits[habitsIndex].items[itemIndex].complete
    prevHabitState.habits[habitsIndex].items[itemIndex].complete = !changedBox;
    return {
      ...prevHabitState

    }
    })
    console.log(habitState)
}

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
        score={habitsObject.score.day}
        scoreGoal={habitsObject.score.dayGoal}
      />

      <WeekScoreBar 
        score={habitsObject.score.week}
        scoreGoal={habitsObject.score.weekGoal}
      />

    </div>
  );
}

export default App;
