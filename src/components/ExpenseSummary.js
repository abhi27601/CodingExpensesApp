import React from 'react';
import { connect } from "react-redux";
import numeral from "numeral";
import getTotalSelector from "../selectors/getTotalSelector";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenseCount > 1 ? 'expenses' : 'expense';
    const formatTotalexpense = numeral(props.Totalexpense / 100 ).format('$0,0.00')
    
    return (
        <div>
            <h1> Viewing {props.expenseCount} {expenseWord} and sum is {formatTotalexpense} </h1>
        </div>
    )
}

const mapStateToProps = (state,props) => {
   const visibleexpenses = getVisibleExpenses(state.expenses, state.filters)
    
    return {
        expenseCount:visibleexpenses.length,
        Totalexpense:getTotalSelector(visibleexpenses)
    }
}


export default connect(mapStateToProps)(ExpenseSummary)
