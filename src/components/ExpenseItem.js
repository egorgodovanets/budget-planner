import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseItem({name, id, cost}) {

    const { dispatch } = useContext(AppContext);

    function handleDeleteExpense() {
        dispatch({
			type: 'DELETE_EXPENSE',
			payload: id,
		});
    }

    return (
        <>
           <li class="list-group-item d-flex justify-content-between align-items-center">{name} 
                <div class="d-flex align-items-center">
                    <span class="badge bg-success rounded-pill">{cost}</span>
                    <button type="button" class="btn-close m-2" aria-label="Close" onClick={handleDeleteExpense}></button>
                </div>
            </li>
        </>
    )
}

export default ExpenseItem; 