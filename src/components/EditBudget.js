import {  useState } from "react"

function EditBudget({budget, handleSaveClick}) {

    const [value, setValue] = useState(budget)

    return (
        <>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={() => handleSaveClick(value)}>Save</button>
        </>
    )
}

export default EditBudget;