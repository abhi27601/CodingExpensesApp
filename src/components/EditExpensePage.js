import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { editExpense,removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
const EditExpensePage = (props) => {
    console.log(props);
        return (
                 <div>
                    Eding the expense with id of {props.match.params.id}
                   
                    
                    <ExpenseForm expense = {props.expense} onSubmit={ (expense) => {
                        console.log("Edit Expense Form")
                        props.dispatch(editExpense(props.expense.id,expense))
                        props.history.push('/')
                        }
                    }/>
                     <button onClick = { (e) => {
                         props.dispatch(removeExpense({id:props.expense.id}))
                         props.history.push('/')
                     }}>Remove</button>
                 </div>
                )
    }

    const mapStateToProps = (state,ownProps) => {
        console.log(state)
        console.log(ownProps)
        return {
            expense:state.expenses.find((expense) => {
               return expense.id == ownProps.match.params.id
            })
        }
        

      
    }

export default connect(mapStateToProps)(EditExpensePage);