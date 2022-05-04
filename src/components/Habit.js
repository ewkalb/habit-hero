import ChecklistItem from "./ChecklistItem"

export default function Habit({id, habit, timeout, type, items}) {

let backgroundColor = ""

function chooseBackgroundColor() {
    
    if (id === 1) {
        backgroundColor = '#CD0101'
    } else if (id === 2) {
        backgroundColor = '#EDEF7C'
    } else if (id === 3) {
        backgroundColor = '#4EE06E'
    } else if (id === 4) {
        backgroundColor = '#FF5139'
    } else if (id === 5) {
        backgroundColor = '#CB76FF'
    } else if (id === 6) {
        backgroundColor = '#9B99FF'
    } else if (id === 7) {
        backgroundColor = '#41C036'
    } else if (id === 8) {
        backgroundColor = '#0ADEC5'
    } 
}


const checklist = items.map(item => (
        <ChecklistItem 
            id={item.id}
            label={item.label}
            complete={item.complete}
        />
))

    chooseBackgroundColor();

    return(
        <div className='habit--container' style={{backgroundColor}}>
            
            <h3 className='habit--reset-time'>{timeout}H</h3>
            <h2 className='habit--title'>{habit.toUpperCase()}</h2>
            
            <form className='habit--checklist-container'>
                {checklist}
            </form>
        </div>
    )
}