import { createStore } from "redux";


/*const incrementCount = (payload = {})=> ({
    type:'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})*/
const incrementCount = ({incrementBy = 1}={}) => ({
    type:'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {})=> ({
    type:'DECREMENT',
    decrementBy
})

const resetCount = (payload = {})=> ({
    type:'RESET',
})

const setCount = (payload = {})=> ({
    type:'SET',
    count:payload.count
})
const countReducer = (state = {count : 0},action) => {

       /*if(action.type === 'INCREMENT'){
        return {
            count: state.count+1
        }
        // reducers are pure functions
        // never change state or action directly
    }*/
    switch(action.type){
        case 'INCREMENT':
           // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
           // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count : 0
            }
        case 'SET': 
            return {
                count : action.count
           }

        default : return state;
    }

};

const store = createStore(countReducer)



const unscubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

//increment count
/*store.dispatch({
    type:'INCREMENT',
    incrementBy:5
})

store.dispatch({
    type:"RESET"
})*/
store.dispatch(incrementCount({incrementBy:10}))
store.dispatch(decrementCount({decrementBy:5}))
store.dispatch(resetCount())
store.dispatch(setCount({count:100}));

/*store.dispatch({
    type:'DECREMENT',
    decrementBy:10
})

store.dispatch({
    type : 'SET',
    count:100
})*/
//output is only determined by input being passed;

unscubscribe();








