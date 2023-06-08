import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function SpentSoFar() {

    const {expenses} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)

    return (
        <>
            <span>Spent so far: {totalExpenses}</span>
        </>
    )
}

export default SpentSoFar;