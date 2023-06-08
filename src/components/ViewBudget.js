
function ViewBudget({budget, handleEditClick}) {

    return (
        <div>
            <span style={{marginRight: '10px'}}>Budget: {budget}</span>
            <button style={{fontSize: '15px'}} onClick={handleEditClick}>Edit</button>
        </div>
    )
}

export default ViewBudget;