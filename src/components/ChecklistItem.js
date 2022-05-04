export default function ChecklistItem({ id, label, complete}) {
    return(
        <div className='checklist--item'>
            <input
                className="checkbox"
                id={id}
                type="checkbox"
                checked={complete}
            />
            <label className='label' htmlFor={id}>{label}</label>
        </div>
    )
}