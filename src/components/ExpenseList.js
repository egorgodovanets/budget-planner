import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {

    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState(expenses)

    useEffect(() => {
        setFilteredExpenses(expenses)
    }, [expenses])

    const handleChange = (e) => {
        const searchResults = expenses.filter(filteredExpense => filteredExpense.name.toLowerCase().includes(e.target.value.toLowerCase()))
        
        setFilteredExpenses(searchResults)
    }

    return (
        <>
            <input type="text" class='form-control mb-2 mr-sm-2' onChange={handleChange} placeholder="Type to search"/>
            <ul class="list-group">
                {filteredExpenses.map(expense => <ExpenseItem name={expense.name} id={expense.id} cost={expense.cost}/>)}
            </ul>
        </>
    )
}

export default ExpenseList;