import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import getTotalSelector from "../selectors/getTotalSelector";
import numeral from "numeral";
export const ExpenseList = (props) => (
  <div className = 'content-container'>
    <div className = 'list-header'>
      <div className = 'show-for-mobile' >Expenses</div>
      <div className = 'show-for-desktop' >Expense</div>
      <div className = 'show-for-desktop' >Amount</div>
    </div>
    <div className = 'list-body'>
    {props.expenses.length === 0 ? (
      
      <div className = 'list-item list-item--message'>
      <span>No expenses</span>
      </div>
    ) : (
      props.expenses.map((expense, index) => {
        return (
          <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
        );
      })
    )}
    </div>
  </div>
);
const mapStateToProps = (state) => {
  const expensestotal = getTotalSelector(state.expenses);
  console.log(numeral(expensestotal / 100).format("$0,0.00"));
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    //filters:state.filters not needed for this component
  };
};

export default connect(mapStateToProps)(ExpenseList);
/*
const ConnectedExpenseList = connect((state) => {
    return {
        expenses:state.expenses
    }

})(ExpenseList);*/

//export default ConnectedExpenseList;
//export default ExpenseList;
