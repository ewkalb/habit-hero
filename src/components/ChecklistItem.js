export default function ChecklistItem({ id, label, complete, handleChange}) {
    return(
        <div className='checklist--item'>
            <input
                className="checkbox"
                id={id}
                type="checkbox"
                defaultChecked={complete}
                onChange={handleChange}
            />
            <label className='label' htmlFor={id}>{label}</label>
        </div>
    )
}