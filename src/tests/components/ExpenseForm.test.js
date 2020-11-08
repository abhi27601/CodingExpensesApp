import React from 'react';
import { shallow } from "enzyme";
import  ExpenseForm  from "../../components/ExpenseForm";
import moment from "moment";
import  expenses  from "../fixtures/expenses";
test('should render expense form' , () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})


//mocking library for moment

test('should render expense form with expense data' , () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})


test('should render expenseform submit simulate event',() => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:() => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change',() => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
   
    expect(wrapper.state('description')).toBe('New description')
})

test('should set amount on amountinput change',() => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
   
    expect(wrapper.state('amount')).toBe('23.50')
})

test('should set amount on amountinput change',() => {
    const value = '23.505'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
   
    expect(wrapper.state('amount')).toBe('')
})

test('should set note on text area change',() => {
    const value = 'a new note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    });
   
    expect(wrapper.state('note')).toBe('a new note')
})

test('should call onSubmit prop for form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense= {expenses[1]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit',{
        preventDefault:() => {}
    })
    const {id,...rest} = {...expenses[1]}
    console.log(rest);
    //console.log({...rest})
    expect(wrapper.state('error').length).toBe(0);
    //expect(onSubmitSpy).toHaveBeenLastCalledWith(rest)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[1].description,
        amount:expenses[1].amount,
        note:expenses[1].note,
        createdAt:expenses[1].createdAt
    })
    
})

test('should set a new date on Date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
    expect(wrapper.find('withStyles(SingleDatePicker)').prop('numberOfMonths')).toBe(1);
    
})

test('should set a new date on Focus change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused:true});
     expect(wrapper.state('calendarfocused')).toBe(true);
})


