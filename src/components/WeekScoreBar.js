export default function WeekScoreBar({score, scoreGoal, duration}) {

    const width = (score / scoreGoal * 100).toString() + '%'

    return (
        <div className="scorebar--container">
            <div className="scorebar--filled week" style={{width}}>.</div>
            <h4 className="scorebar--text">Weekly Goal</h4>
            <h3 className="scorebar--score">{score}/{scoreGoal}</h3>
        </div>
    )
}