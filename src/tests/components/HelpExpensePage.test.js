import React from 'react';
import { shallow } from "enzyme";
import HelpExpensePage from '../../components/HelpExpensePage'

test('should render HelpExpensePage page', () => {
    const wrapper = shallow(<HelpExpensePage />)
    expect(wrapper).toMatchSnapshot();
})