import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function SpentSoFar() {

    const {expenses} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)

    return (
        <div class="alert alert-secondary p-4 d-flex justify-content-center">
            <span>Spent so far: {totalExpenses}</span>
        </div>
    )
}

export default SpentSoFar;