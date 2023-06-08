import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import RemainingBudget from "./components/RemainingBudget";
import SpentSoFar from "./components/SpentSoFar";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import "./styles/App.css";

function App() {
  return (
    <div id="container">
      <AppProvider>
    
        <h1>My budget planner</h1>

        <div id="data">
          <div className="data-elem">
            <Budget/>
          </div>
          <div className="data-elem">
            <RemainingBudget/>
          </div>
          <div className="data-elem">
            <SpentSoFar/>
          </div>
        </div>  

        <h2>Expenses</h2>

        <div id="exp-list">
          <ExpenseList/>
        </div>

        <h2>Add expense</h2>

        <div id="exp-form">
          <AddExpenseForm/>
        </div> 
             
      </AppProvider>
    </div>
  );
}

export default App;
