import  React  from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
const ExpenseDashBoardPage = () => (
    <div>
        This is from dashboard component.
        <ExpenseListFilters />
        <ExpenseList />
    </div>
) 
console.log("Gauri")

export default ExpenseDashBoardPage;
