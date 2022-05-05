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
                <label className='label' htmlFor={id} style={{textDecoration: complete ? "line-through" : "none", color: complete && "#6e6e6e"}}>{label}</label>
        </div>
    )
}