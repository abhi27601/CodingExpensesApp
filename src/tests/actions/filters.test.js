import  moment from "moment";
import { setTextfilter, setEndDate, setStartDate, sortByAmount, sortByDate } from "../../actions/filters";
test('should setup text filters action object', () => {

    const action = setTextfilter('123abc')

    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'123abc'
    })
})

test('should setup sort by date filters action object', () => {

    const action = sortByDate()

    expect(action).toEqual({
        type:'SORT_BY_DATE',
        
    })
})

test('should setup sort by date filters action object', () => {

    const action = sortByAmount()

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        
    })
})

test('should setup sort by date filters action object', () => {

    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
        
    })
})

test('should setup sort by date filters action object', () => {

    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
        
    })
})