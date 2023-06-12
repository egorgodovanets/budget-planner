import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "../context/AppContext";

function AddExpenseForm() {
    const {dispatch} = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit = () => {
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
        <div>
            <div class="input-group">
                <span class="input-group-text">Task and cost</span>
                <input type="text" aria-label="First name" class="form-control" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" aria-label="Last name" class="form-control"  value={cost} onChange={e => setCost(e.target.value)}/>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-success btn-lg mt-3" onClick={onSubmit}>Save</button>
            </div>
        </div>
    )
}

export default AddExpenseForm;

