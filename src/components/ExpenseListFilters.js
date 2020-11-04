import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect  } from "react-redux";
import {setTextfilter, sortByAmount, sortByDate} from "../actions/filters";
const ExpenseListFilters = (props) => (

    <div>
        <input type='text' value={props.filters.text} onChange ={ (e) => { 
            props.dispatch(setTextfilter(e.target.value))
            console.log(e.target.value);
        }} />

        <select value={props.filters.sortBy} onChange = { (e) => {
            
            if(e.target.value == 'date'){
                props.dispatch(sortByDate());
            
            } 
            else {
                props.dispatch(sortByAmount());
            }
        }}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        
{/*
        <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        /> */}

    </div>
)
 
const mapStateToProps = (state) => {
    return {
        filters:state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)