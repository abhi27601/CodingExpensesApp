import React from 'react';
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
 
test('should correctly render ExpenseSummary',() => {
    const wrapper = shallow(<ExpenseSummary expenseCount= {1}  Totalexpense ={200} />)
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount= {2}  Totalexpense ={2000} />)
    expect(wrapper).toMatchSnapshot();
})