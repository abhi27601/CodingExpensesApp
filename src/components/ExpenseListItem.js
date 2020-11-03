import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from "../actions/expenses";
const ExpenseListItem = (props) => (
    <div>
        Expense Description: {props.description}
        <button onClick = { (e) => {
            props.dispatch(removeExpense({id:props.id}))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)