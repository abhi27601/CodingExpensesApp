import filtersReducer from "../../reducers/filters";
import moment from "moment";

//type:@@INIT by default 

test('should setup default filter values',() => {
    const state = filtersReducer(undefined,{ type:'@@INIT'});
    
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })

})

test('should setup sort by amount  filter values',() => {
    const state = filtersReducer(undefined,{ type:'SORT_BY_AMOUNT'});
    
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })

})

test('should setup sort by text filter values',() => {
    const state = filtersReducer(undefined,{ type:'SET_TEXT_FILTER' , text:'abc123'});
    
    expect(state).toEqual({
        text:'abc123',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })

})


test('should setup sort by date  filter values',() => {
    const currentState= {
        text:'',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
        sortBy:'amount'
    }
    
    const state = filtersReducer(currentState,{ type:'SORT_BY_DATE'});
    
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })

})

test('should setup sort by startDate  filter values',() => {
    const state = filtersReducer(undefined,{ type:'SET_START_DATE', startDate:moment(0).add(2,'days')});
    
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment(0).add(2,'days'),
        endDate:moment().endOf('month')
    })

})
test('should setup sort by startDate  filter values',() => {
    const state = filtersReducer(undefined,{ type:'SET_END_DATE', endDate:moment(0).add(2,'days')});
    
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        endDate:moment(0).add(2,'days'),
        startDate:moment().startOf('month')
    })

})