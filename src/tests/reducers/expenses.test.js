import expensesReducer from "../../reducers/expenses";
import  expenses  from "../fixtures/expenses";

test('should set default state',() => {

    const state = expensesReducer(undefined, {type:'@@INIT'})

    expect(state).toEqual([]);
})

 
test('should remove expense and state change shld be noticed',() => {
    const action= {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action)

    expect(state).toEqual([expenses[0],expenses[2]]);
})


test('should not  remove expense and state change shld be noticed',() => {
    const action= {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses,action)

    expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
})

test('should add expense and state change shld be noticed',() => {
     const action= {
        type:'ADD_EXPENSE',
        expense:{
            ...expenses[0],
            id:4,
            note:'chk data'
        }
    }
    const state = expensesReducer(expenses,action)

    expect(state).toEqual([...expenses,action.expense]);
})


test('should edit expense and state change shld be noticed',() => {
    const action= {
       type:'EDIT_EXPENSE',
       id:'2',
       updates:{
           note:'edit note chk'
       }
   }
   const state = expensesReducer(expenses,action)

   expect(state[1].note).toBe(action.updates.note);
})



test('should not edit expense and state change shld be noticed',() => {
    const action= {
       type:'EDIT_EXPENSE',
       id:'-1',
       updates:{
           note:'edit note chk'
       }
   }
   const state = expensesReducer(expenses,action)
   expect(state).toEqual(expenses);
   expect(state.length).toBe(3);
})
