import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect  } from "react-redux";
import {setTextfilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import moment from "moment";
export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused:null
    }
    onTextChange = (e) => { 
        this.props.setTextfilter(e.target.value)
        console.log(e.target.value);
    }
    onSortChange = (e) => {
                    
        if(e.target.value == 'date'){
            this.props.sortByDate();
        
        } 
        else {
            this.props.sortByAmount()
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);

    }

    onFocusChange = (calendarFocused) => this.setState({ calendarFocused })

    render (){
        return (

            <div>
                <input type='text' value={this.props.filters.text} onChange ={ this.onTextChange } />
        
                <select value={this.props.filters.sortBy} onChange = { this.onSortChange }>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                
        {
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    showClearDates = {true}
                    isOutsideRange = { () => false}
                /> }
        
            </div>
        )
    }
}
 
const mapStateToProps = (state) => ({
        filters:state.filters
    })

const mapDispatchToProps = (dispatch,props) => ({
    setTextfilter: (text) => dispatch(setTextfilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)