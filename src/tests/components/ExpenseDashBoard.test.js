import React from 'react';
import { shallow } from "enzyme";
import ExpenseDashBoardPage from "../../components/ExpenseDashBoardPage";

test('should render expensedahboard page', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />)
    expect(wrapper).toMatchSnapshot();
})