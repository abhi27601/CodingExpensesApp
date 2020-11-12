import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter  from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import {addExpense,editExpense,removeExpense} from './actions/expenses'
import {setEndDate , setTextfilter , setStartDate , sortByAmount , sortByDate} from './actions/filters'
import getVisibleExpenses from "./selectors/getVisibleExpenses";
import './firebase/firebase';
import  "./promises";

import '../node_modules/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    console.log(store.getState());
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})
//const expenseOne = store.dispatch(addExpense({description:'Water bill',amount:100,createdAt:1000}));
//const expensetwo = store.dispatch(addExpense({description:'Gas bill',amount:200,createdAt:4000}));
//store.dispatch(addExpense({description:'Rent',amount:350,createdAt:2000}));
//store.dispatch(addExpense({description:'Home',amount:400,createdAt:3000}));



 

const jsx= (
<Provider store = {store}>
    <AppRouter />
</Provider>
    )

ReactDOM.render(jsx, document.getElementById('app'));
