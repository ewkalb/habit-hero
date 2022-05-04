import './App.css';
import Habit from './components/Habit';
import DayScoreBar from './components/DayScoreBar';
import WeekScoreBar from './components/WeekScoreBar';
import { habitsObject } from "./files/habitsObject"


const habitElements = habitsObject.habits.map(habit => (
    <Habit
      id={habit.id}
      habit={habit.habit}
      timeout={habit.timeout}
      type={habit.type}
      items={habit.items}
    />
))

function App() {
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
