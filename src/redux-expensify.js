import store from "../store/configureStore";
import {addExpense,editExpense,removeExpense} from '../actions/expenses'
import {setEndDate , setTextfilter , setStartDate , sortByAmount , sortByDate} from '../actions/filters'
import getVisibleExpenses from "../selectors/getVisibleExpenses";




    store.subscribe(()=>{
        const state = store.getState();
       // console.log(store.getState());
        const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
        console.log(visibleExpenses);
    })
    const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100,createdAt:1000}));
    const expensetwo = store.dispatch(addExpense({description:'Coffee',amount:100 ,createdAt : -1000}));
    const expensethree = store.dispatch(addExpense({description:'Bike',amount:2222}));
    store.dispatch(removeExpense({id: expenseOne.expense.id}))
    store.dispatch(editExpense(expensethree.expense.id , {description:"new desc"}))
    
    store.dispatch(sortByAmount());
    store.dispatch(sortByDate());
    
    store.dispatch(setStartDate());
    store.dispatch(setStartDate(100));
    store.dispatch(setEndDate(200));
    store.dispatch(setStartDate(500));
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