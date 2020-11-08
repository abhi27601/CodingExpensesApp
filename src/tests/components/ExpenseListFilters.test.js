import React from 'react';
import { shallow } from "enzyme";
import { filters,altfilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import moment from "moment";

let setTextfilter, sortByDate, 
sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach( ()=> {
    setTextfilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
    filters={filters} 
    setTextfilter= {setTextfilter}
    sortByDate={sortByDate}
    sortByAmount = {sortByAmount}
    setStartDate = {setStartDate}
    setEndDate = { setEndDate}
     /> )

} );

test('should render expenselistfilters',() => {
    expect(wrapper).toMatchSnapshot()
})

test('should render expenselistfilters with altData',() => {
    wrapper.setProps({
        filters:altfilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change',() => {
   const value = 'some'
    wrapper.find('input').simulate('change', {
       target:{
           value
       }
   })
    expect(setTextfilter).toHaveBeenLastCalledWith(value)
})

test('should sort By date',() => {
    const value = 'date'
    wrapper.setProps({
        filters:altfilters
    })
     wrapper.find('select').simulate('change', {
        target:{
            value
        }
    })
     expect(sortByDate).toHaveBeenCalled()
 })
 test('should sort By date',() => {
    const value = 'amount'
    
     wrapper.find('select').simulate('change', {
        target:{
            value
        }
    })
     expect(sortByAmount).toHaveBeenCalled()
 })
 test('should handle date change',() => {
     const startDate=moment(0).add(4,'years')
     const endDate=moment(0).add(8,'years')
     wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate});
     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
     expect(setEndDate).toHaveBeenLastCalledWith(endDate)
 })

 test('should handle focus change',() => {
    const calendarfocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarfocused);
    expect(wrapper.state('calendarfocused')).toBe(calendarfocused);
    //expect(setEndDate).toHaveBeenLastCalledWith(endDate)
}) 


/*test('should handle text change',() => {
    const value = 'some'
     wrapper.find('input').at(0).prop('onChange')(altfilters.text)
     expect(setTextfilter).toHaveBeenLastCalledWith(altfilters.text)
 })*/



