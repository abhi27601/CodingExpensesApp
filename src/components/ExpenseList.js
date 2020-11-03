import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from "../selectors/getVisibleExpenses";
const ExpenseList = (props) => (
    <div>
        <h1>Expense List:</h1>
        {
            props.expenses.map((expense,index) => {
            return <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
            })
        }
        {props.expenses.length}
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses:getVisibleExpenses(state.expenses,state.filters),
        filters:state.filters
    }

}


export default connect(mapStateToProps)(ExpenseList);
/*
const ConnectedExpenseList = connect((state) => {
    return {
        expenses:state.expenses
    }

})(ExpenseList);*/

//export default ConnectedExpenseList;
//export default ExpenseList;