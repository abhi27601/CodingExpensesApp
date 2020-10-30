import React  from "react";
import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";

const ExpenseDashBoardPage = () => (
    <div>
        This is from dashboard component.
    </div>
) 
console.log("Gauri")

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
      <NavLink to='/' activeClassName = 'is-active' exact = {true} >DashBoardPage</NavLink>
      <NavLink to='/create' activeClassName = 'is-active'>Add Expense</NavLink>
      <NavLink to='/edit' activeClassName = 'is-active'>Edit Expense</NavLink>
      <NavLink to='/help' activeClassName = 'is-active' >Help Expense</NavLink>
    </header>
)
const AppRouter = () => (

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
export default AppRouter
