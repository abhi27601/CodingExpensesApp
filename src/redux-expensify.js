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

//SET_TEXT_FILTER
const setTextfilter = (text = '') =>({
    type:'SET_TEXT_FILTER',
    text
})

const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT',
    
})


const sortByDate = () =>({
    type:'SORT_BY_DATE',
    
})
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
const setStartDate = (startDate = '') =>({
    type:'SET_START_DATE',
    startDate
})
//SET_END_DATE
const setEndDate = (endDate = '') =>({
    type:'SET_END_DATE',
    endDate
})

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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
            case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy:'amount'
                }
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy:'date'
                }
            case 'SET_START_DATE':
                    return {
                        ...state,
                        startDate:action.startDate
                    }
            case 'SET_END_DATE':
                        return {
                            ...state,
                            endDate:action.endDate
                        }
        default:
            return state;

    }
}

//Get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=>{
        const startDatematch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.endDate <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDatematch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy == 'amount'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }

    })

}

const store = createStore(
    combineReducers(
         {
                expenses:expensesReducer,
                filters:filtersReducer
         }
    
    ));

    store.subscribe(()=>{
        const state = store.getState();
       // console.log(store.getState());
        const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
        console.log(visibleExpenses);
    })
    const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100,createdAt:1000}));
    const expensetwo = store.dispatch(addExpense({description:'Coffee',amount:100 ,createdAt : -1000}));
    const expensethree = store.dispatch(addExpense({description:'Bike',amount:2222}));
   /* store.dispatch(removeExpense({id: expenseOne.expense.id}))
    store.dispatch(editExpense(expensethree.expense.id , {description:"new desc"}))
    
    store.dispatch(sortByAmount());
    store.dispatch(sortByDate());
    
    store.dispatch(setStartDate());
    store.dispatch(setStartDate(100));
    store.dispatch(setEndDate(200));*/
    //store.dispatch(setStartDate(500));
    store.dispatch(setTextfilter('ffe'));
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