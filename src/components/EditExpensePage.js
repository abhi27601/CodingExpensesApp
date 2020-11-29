import React from "react";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log("Edit Expense Form");
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onRemoveExpense = (e) => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className = 'page-header'>
        <div className = 'content-container'>
          <h1 className = 'page-header__title'>Edit Expense</h1>
        {/*Eding the expense with id of {this.props.match.params.id}*/}
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className='button button--secondary' onClick={this.onRemoveExpense}>Remove</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    expense: state.expenses.find((expense) => {
      return expense.id == ownProps.match.params.id;
    }),
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
