import { startAddExpense , editExpense, removeExpense, addExpense,setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import moment from 'moment';

const uid='thisismyuid';
const defaultAuthState= {auth: { uid }}
const createMockStore = configureStore([thunk]);

    beforeEach((done) => {
        const expensesData = {};
        expenses.forEach(({ id, description, amount,note,createdAt}) => {
            expensesData[id]={description,amount,note,createdAt}
        })
        database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>{ done() });
    })

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

test('should add expense to database and store',(done) => {
const store = createMockStore(defaultAuthState);
const expensedata = {
    description:'Mouse',
    amount:'30',
    note:'new mouse for work',
    createdAt:20000
}
store.dispatch(startAddExpense(expensedata))
.then((data) => {
   const actions = store.getActions()
    expect(actions[0]).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            ...expensedata
        }
    })
    database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
        expect(snapshot.val()).toEqual(expensedata)
        done();
    }).catch((err) => {

    })
  // expect(1).toBe(1); 
   
}).catch((error) => {
    console.log(error)
})

})

test('should set up set expenses action obj with data',() => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

test('should fetch expenses from firebase',(done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses())
    .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done()
    }).catch((err) => {
        console.log(err);
    })

});


test('should remove expense from firebase ',(done) => {
   const store = createMockStore(defaultAuthState)
   const id=expenses[0].id;
   store.dispatch(startRemoveExpense({id}))
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done()
        })
        .catch((err) => {

        })
    })
})

test('should update the data in firebase for edit' , (done) => {
    const store = createMockStore(defaultAuthState);
    const id=expenses[2].id;
    const updates = {amount:5000}

    store.dispatch(startEditExpense(id,updates))
    .then(() => {
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        })
    })

    return database.ref(`users/${uid}/expenses/${id}`).once('value')
    .then((snapshot) => {
        expect(snapshot.val().amount).toEqual(updates.amount)
        done();
    })
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
