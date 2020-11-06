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

