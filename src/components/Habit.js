

import ChecklistItem from "./ChecklistItem"

export default function Habit({habitId, habit, timeout, items, handleChange}) {

let backgroundColor = ""
function chooseBackgroundColor() {
    
    if (habitId === 1) {
        backgroundColor = '#CD0101'
    } else if (habitId === 2) {
        backgroundColor = '#EDEF7C'
    } else if (habitId === 3) {
        backgroundColor = '#4EE06E'
    } else if (habitId === 4) {
        backgroundColor = '#FF5139'
    } else if (habitId === 5) {
        backgroundColor = '#CB76FF'
    } else if (habitId === 6) {
        backgroundColor = '#9B99FF'
    } else if (habitId === 7) {
        backgroundColor = '#41C036'
    } else if (habitId === 8) {
        backgroundColor = '#0ADEC5'
    } 
}
const checklist = items.map(item => (
        <ChecklistItem 
            key={item.id}
            id={item.id}
            label={item.label}
            complete={item.complete}
            handleChange={handleChange}
        />
))

    chooseBackgroundColor();

    return(
        <div className='habit--container' style={{backgroundColor}}>
            
            <h3 className='habit--reset-time'>{timeout}H</h3>
            <h2 className='habit--title'>{habit.toUpperCase()}</h2>
            
            <form className='habit--checklist-container' id={habitId}>
                {checklist}
            </form>
        </div>
    )
}