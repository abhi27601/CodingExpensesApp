import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";
const ExpenseListItem = (props) => (
    <div>
        <NavLink to={ `/edit/${props.id}`} activeClassName = 'is-active'><h3>{props.description}</h3></NavLink>
        Expense Description: {props.description},
        <div>{props.amount},{props.createdAt}</div>
       
    </div>
)
export default ExpenseListItem
//export default connect()(ExpenseListItem)