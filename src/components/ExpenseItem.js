import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Delete from '../styles/2612798.png'
import Task from '../styles/task.png'

function ExpenseItem({name, id, cost}) {

    const { dispatch } = useContext(AppContext);

    function handleDeleteExpense() {
        dispatch({
			type: 'DELETE_EXPENSE',
			payload: id,
		});
    }

    const white = {background: 'white', width: '2.5vh'}, grey = {background: '#DCDCDC', width: '2.5vh'}, task = {listStyleImage: Task}
    const [color, setColor] = useState(white)

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', margin: '20px 0', fontSize: '20px'}}>
           <li style={task}>{name} <span>{cost}</span></li>
           <img src={Delete} alt="delete" style={color} onMouseOver={() => setColor(grey)} onMouseOut={() => setColor(white)} onClick={handleDeleteExpense} />
        </div>
    )
}

export default ExpenseItem; 