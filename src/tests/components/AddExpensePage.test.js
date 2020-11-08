import React from 'react';
import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from "enzyme";
import moment from "moment";
import expenses from "../fixtures/expenses";

/*test('should render AddExpense snapshot',() => {
    const wrapper=shallow(<AddExpensePage />)
    expect(wrapper).toMatchSnapshot();
})*/

let addExpense,history,wrapper;

beforeEach(() => {
     addExpense = jest.fn();
     history = {push:jest.fn()}
     wrapper=shallow(<AddExpensePage addExpense={addExpense} history = {history} />)
})
test('should render AddExpense snapshot',() => {
    
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit',() => {
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
})



