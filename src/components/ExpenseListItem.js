import React from 'react';
import { NavLink } from "react-router-dom";
import  numeral  from "numeral";
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";
import moment from "moment";

const ExpenseListItem = (props) => (
    <div>
        <NavLink to={ `/edit/${props.id}`} activeClassName = 'is-active'><h3>{props.description}</h3></NavLink>
        Expense Description: {props.description},
        <p>{numeral(props.amount / 100).format('$0,0.00')} 
        -
        {moment(props.createdAt).format('MMM Do, YYYY')}
        </p>  
    </div>
)
export default ExpenseListItem
//export default connect()(ExpenseListItem)