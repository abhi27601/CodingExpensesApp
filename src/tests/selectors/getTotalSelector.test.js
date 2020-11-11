import React from 'react';
import getTotalSelector from "../../selectors/getTotalSelector";
import expenses from "../fixtures/expenses";

test('should return total sum from expenses', () => {
    const sum = getTotalSelector(expenses);
    expect(sum).toBe(114195);
})

test('should return total sum from expenses', () => {
    const sum = getTotalSelector([]);
    expect(sum).toBe(0);
})

test('should return total sum from expenses', () => {
    const sum = getTotalSelector([expenses[0]]);
    expect(sum).toBe(195);
})



