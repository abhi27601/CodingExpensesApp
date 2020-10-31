import {createStore,combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

//ADD_EXPENSE
const addExpense = ({
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
})
//REMOVE_EXPENSE

const removeExpense = ({
   id
    } = {}) => ({

    type:'REMOVE_EXPENSE',
    id
})


const editExpense = (id,updates) => ({
     type:'EDIT_EXPENSE',
     id,
     updates
 })
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

const expensesReducerDefaultState = [];


//EXPENSES REDUCER
const expensesReducer = (state = [], action) => {
        switch(action.type){
            case 'ADD_EXPENSE':
               // return state.concat(action.expense)
               return [
                   ...state,
                   action.expense
               ]
            case 'REMOVE_EXPENSE':
                return state.filter(({id}) => id !== action.id )
            case 'EDIT_EXPENSE':
               return state.map((expense) => {
                    if(expense.id === action.id){     
                        return {
                                ...expense,
                                ...action.updates
                            }
                    }
                    else{
                        return expense
                    }
                })
                default:
                return state;
        }
}
const filtersDefaultState = {
    text:'',
    sortBy: "amount", // date
    startDate: undefined,
    endDate: undefined

}
const filtersReducer = (state = filtersDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}


const store = createStore(
    combineReducers(
         {
                expenses:expensesReducer,
                filters:filtersReducer
         }
    
    ));

    store.subscribe(()=>{
        console.log(store.getState());
    })
    const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100}));
    const expensetwo = store.dispatch(addExpense({description:'Coffee',amount:100}));
    const expensethree = store.dispatch(addExpense({description:'Bike',amount:2222}));
    store.dispatch(removeExpense({id: expenseOne.expense.id}))
    store.dispatch(editExpense(expensethree.expense.id , {description:"new desc"}))

const demoState = {

    expenses:[{
        id:'1',
        description:'Jan Rent',
        note:'This was final payment',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'Rent',
        sortBy: "amount", // date
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name:'joe',
    age:22
}
const a=[1,2]
console.log([...a,3,4])
console.log( {...user})