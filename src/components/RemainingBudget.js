import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function RemainingBudget() {

    const {expenses, budget} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)

    return (
        <>
            <span>Remaining: {budget - totalExpenses}</span>
        </>
    )
}

export default RemainingBudget;