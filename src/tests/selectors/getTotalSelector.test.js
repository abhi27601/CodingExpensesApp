import React from 'react';
import getTotalSelector from "../../selectors/getTotalSelector";
import expenses from "../fixtures/expenses";

test('should return total sum from expenses', () => {
    const sum = getTotalSelector(expenses);
    expect(sum).toBe(114195);
})

