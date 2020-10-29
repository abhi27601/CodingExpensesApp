import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";
import '../node_modules/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
    <div>
        This is from dashboard component.
    </div>
) 

const AddExpensePage = () => (
    <div>
        This is from AddExpense component.
    </div>
) 

const EditExpensePage = () => (
    <div>
        This is from Edit component.
    </div>
)

const HelpExpensePage = () => (
    <div>
        This is from Help component.
    </div>
)

const NotFoundPage = () => (
    <div>
        404!!
        <Link to='/'>Go Home</Link>

    </div>
)

const Header = () => (
    <header>
      <h1>Expensify App</h1>
      <NavLink to='/create' activeClassName = 'is-active'>Add Expense</NavLink>
      <NavLink to='/edit'>Edit Expense</NavLink>
      <NavLink to='/help'>Help Expense</NavLink>
    </header>
)


const routes = (
    <BrowserRouter>
    <div>
        <Header/>
            <Switch>
                <Route path='/' component={ExpenseDashBoardPage} exact='true'></Route>
                <Route path='/create' component={AddExpensePage}></Route>
                <Route path='/edit' component={EditExpensePage}></Route>
                <Route path='/help' component={HelpExpensePage}></Route>
                <Route component={NotFoundPage}></Route>
        </Switch>
    </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
