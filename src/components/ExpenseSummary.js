import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { NavLink } from "react-router-dom";
import getTotalSelector from "../selectors/getTotalSelector";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

export const ExpenseSummary = (props) => {
  const expenseWord = props.expenseCount > 1 ? "expenses" : "expense";
  const formatTotalexpense = numeral(props.Totalexpense / 100).format(
    "$0,0.00"
  );

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          {" "}
          Viewing <span> {props.expenseCount} </span> {expenseWord} and sum is{" "}
          <span>{formatTotalexpense} </span>{" "}
        </h1>
        <div className="page-header__actions">
          <NavLink to="/create" className="button">
            Add Expense
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const visibleexpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleexpenses.length,
    Totalexpense: getTotalSelector(visibleexpenses),
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
