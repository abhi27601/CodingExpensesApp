import { addExpense , editExpense, removeExpense } from '../../actions/expenses'
import expenses from "../fixtures/expenses";

test('should setup remove expense action object', () => {

    const action = removeExpense({id:'123abc'})

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})



test('should setup edit expense action object', () => {
    
    
    const action = editExpense('123abc',{note:'A new note'})

    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'A new note'
        }
    })
})

test('should setup add expense action object', () => {
    
    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
})

test('should add expense to database and store',() => {

})

test('should add expense to database and store',() => {

})
/*test('should setup default add expense action object', () => {
    const expense = {
        description:'',
        amount:'',
        note:"",
        createdAt:null
    }
    const action = addExpense(expense)

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
           ...expense
        }
    })
})*/
