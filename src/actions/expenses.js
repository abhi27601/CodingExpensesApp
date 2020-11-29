import { v4 as uuidv4 } from "uuid";
import database from "../firebase/firebase";
// componet calls action generator
// returns a function
//dipatching function
//redux-thunk
// do some action
// state change is done.
//ADD_EXPENSE
/*
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
    } = {}) => ({

    type:'ADD_EXPENSE',
    expense:{
        id:uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})*/
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    const ref = await database.ref(`users/${uid}/expenses`).push(expense);

    dispatch(
      addExpense({
        id: ref.key,
        ...expense,
      })
    );
  };
};
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childsnapshot) => {
          expenses.push({
            id: childsnapshot.key,
            ...childsnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch(() => {
        console.log("error while removing data");
      });
  };
};

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch((err) => {
        console.log("error while editing");
      });
  };
};
/*
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};*/

export { editExpense, removeExpense };
