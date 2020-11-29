import React from "react";
import { NavLink } from "react-router-dom";
import numeral from "numeral";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import moment from "moment";

const ExpenseListItem = (props) => (
  <NavLink className='list-item' to={`/edit/${props.id}`} activeClassName="is-active">
    <div>
      <h3 className = 'list-item__title'>{props.description}</h3>
      <span className = 'list-item__sub-title'>{moment(props.createdAt).format("MMM Do, YYYY")}</span>
    </div>
    <h3 className = 'list-item__data'> {numeral(props.amount / 100).format("$0,0.00")}</h3>
   
  </NavLink>
);
export default ExpenseListItem;
//export default connect()(ExpenseListItem)
