import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import getTotalSelector from '../selectors/getTotalSelector';
import numeral from "numeral";
export const ExpenseList = (props) => (
    <div>
        
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ):
            ( 
             props.expenses.map((expense,index) => {
                 return <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
                 })  
            )

        }
       
    </div>
)
const mapStateToProps = (state) => {
    const expensestotal = getTotalSelector(state.expenses);
    console.log(numeral(expensestotal/100).format('$0,0.00'));
    return {
        expenses:getVisibleExpenses(state.expenses,state.filters),
        //filters:state.filters not needed for this component
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