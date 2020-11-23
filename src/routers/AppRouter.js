import React  from "react";
import { Router,Route,Switch,Link,NavLink } from "react-router-dom";
import { createBrowserHistory } from 'history';
import  ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

// If we use browser router behind the scenes react router is doing some work for us. like keeping track of history object but now we want to redirect to different locations directly so we are using history api 
//browser history 
// npm i history

export const history = createBrowserHistory();

const AppRouter = () => (

        <Router history = {history}>
        <div>
            <Header/>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}></Route>
                    <Route path="/dashboard" component={ExpenseDashBoardPage}></Route>
                    <Route path="/create" component={AddExpensePage}></Route>
                    <Route path="/edit/:id" component={EditExpensePage}></Route>
                    <Route path="/help" component={HelpExpensePage}></Route>
                    <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
        </Router>
    
)
export default AppRouter
