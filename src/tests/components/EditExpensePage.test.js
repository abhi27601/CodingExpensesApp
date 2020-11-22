import React from 'react';
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import ExpenseForm from '../../components/ExpenseForm';

let startEditExpense, startRemoveExpense, history, wrapper, match;

beforeEach( ()=> {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    match={params:expenses[2]}
    wrapper = shallow( <EditExpensePage startEditExpense={startEditExpense} 
    history={history} 
    startRemoveExpense={startRemoveExpense}
    expense={expenses[2]} 
    match = {match}
    />)
    console.log(wrapper.debug());
})
test('should render snapshot', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle edit expense' , () => {
  
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})
test('should handle remove expense' , () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
})
