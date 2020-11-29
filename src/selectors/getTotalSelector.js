const getTotalSelector = (expenses) => {
  return expenses.reduce((Totalexpenses, expense) => {
    return (Totalexpenses += expense.amount);
  }, 0);
};

export default getTotalSelector;
