import  React  from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import  ExpenseSummary from "./ExpenseSummary";
const ExpenseDashBoardPage = () => (
    <div>
        This is from dashboard component.
        <ExpenseSummary /> 
        <ExpenseListFilters />
        <ExpenseList />
    </div>
) 
console.log("Gauri")

export default ExpenseDashBoardPage;
