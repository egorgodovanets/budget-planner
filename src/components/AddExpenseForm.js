import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "../context/AppContext";

function AddExpenseForm() {
    const {dispatch} = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })

        setName('')
        setCost('')
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '70%'}}>
            <div>
                <label style={{margin: '10px', fontSize: '17px'}}>Name</label>
                <input style={{fontSize: '20px'}} value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label style={{margin: '10px', fontSize: '17px'}}>Cost</label>
                <input style={{fontSize: '20px'}} value={cost} onChange={e => setCost(e.target.value)}/>
            </div>
            <button onClick={onSubmit}>Save</button>
        </div>
    )
}

export default AddExpenseForm;

