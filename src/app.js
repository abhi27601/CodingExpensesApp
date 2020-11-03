import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter  from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import {addExpense,editExpense,removeExpense} from './actions/expenses'
import {setEndDate , setTextfilter , setStartDate , sortByAmount , sortByDate} from './actions/filters'
import getVisibleExpenses from "./selectors/getVisibleExpenses";

import '../node_modules/normalize.css';
import './styles/styles.scss';


const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    console.log(store.getState());
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})
const expenseOne = store.dispatch(addExpense({description:'Water bill',amount:100,createdAt:1000}));
const expensetwo = store.dispatch(addExpense({description:'Gas bill',amount:100,createdAt:1000}));

store.dispatch(setTextfilter('water'));

setTimeout(() => {
    store.dispatch(setTextfilter('gas'))
}, 1500); 

const jsx= (
<Provider store = {store}>
    <AppRouter />
</Provider>
    )

ReactDOM.render(jsx, document.getElementById('app'));
