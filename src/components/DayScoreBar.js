export default function DayScoreBar({score, scoreGoal}) {

    const width = (score / scoreGoal * 100).toString() + '%'

    return (
        <div className="scorebar--container">
            <div className="scorebar--filled day" style={{width}}>.</div>
            <h4 className="scorebar--text">Daily Goal</h4>
            <h3 className="scorebar--score">{score}/{scoreGoal}</h3>
        </div>
    )
}