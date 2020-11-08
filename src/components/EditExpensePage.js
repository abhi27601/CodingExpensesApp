import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { editExpense,removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        console.log("Edit Expense Form")
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/')
        }
    onRemoveExpense =  (e) => {
        this.props.removeExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
       return (
            <div>
               Eding the expense with id of {this.props.match.params.id}
               <ExpenseForm expense = {this.props.expense} onSubmit={ this.onSubmit} />
                <button onClick = {this.onRemoveExpense }>Remove</button>
            </div>
           )
    }
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
    const mapDispatchToProps = (dispatch,props) => {
        return {
            editExpense:(id,updates) => dispatch(editExpense(id,updates)),
            removeExpense: (id) => dispatch(removeExpense(id))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);