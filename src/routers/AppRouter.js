import React  from "react";
import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";
import  ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (

        <BrowserRouter>
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
        </BrowserRouter>
    
)
export default AppRouter
