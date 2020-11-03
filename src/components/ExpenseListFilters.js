import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect  } from "react-redux";
import {setTextfilter} from "../actions/filters";
const ExpenseListFilters = (props) => (

    <div>
        <input type='text' value={props.filters.text} onChange ={ (e) => { 
            props.dispatch(setTextfilter(e.target.value))
            console.log(e.target.value);
        }} />
        
    </div>
)
 
const mapStateToProps = (state) => {
    return {
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)