import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from "react-redux";
import { addExpense } from '../actions/expenses';
const AddExpensePage = (props) => {console.log(props) 
    return(
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={ (expense) => {
            console.log("Expense Form")
            props.dispatch(addExpense(expense))
            props.history.push('/')
        } } />
        
    </div>
)
    }

export default connect()(AddExpensePage);
