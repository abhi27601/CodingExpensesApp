import React from 'react';
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import ExpenseForm from '../../components/ExpenseForm';

let editExpense, removeExpense, history, wrapper, match;

beforeEach( ()=> {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    match={params:expenses[2]}
    wrapper = shallow( <EditExpensePage editExpense={editExpense} 
    history={history} 
    removeExpense={removeExpense}
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})
test('should handle remove expense' , () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
})
