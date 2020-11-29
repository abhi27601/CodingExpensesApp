import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarfocused: false,
      error: "",
    };
  }
  /*state={
        description:'',
        amount:'',
        note:'',
        createdAt:moment(),
        calendarfocused:false,
        error:''
    }*/
  onDescriptionchange = (value) => {
    this.setState((prevState) => ({
      description: value,
    }));
  };

  onAmountchange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState((prevState) => ({
        amount,
      }));
    }
  };
  // e.persist() if u use e.target.value in callback u ll get error for persist() //105
  onNotechange = (e) => {
    const note = e.target.value;
    this.setState((prevState) => ({ note }));
  };

  onDateChange = (createdAt) => {
    if (createdAt) this.setState({ createdAt });
  };

  onFocusChange = ({ focused }) => this.setState({ calendarfocused: focused }); // PropTypes.func.isRequired

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      const error = "Please enter proper value";
      this.setState((prevState) => ({
        error,
      }));
    } else {
      this.setState((prevState) => ({ error: "" }));
      console.log("!!Submitted !!");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };

  render() {
    return (  
        <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className = 'form__error'>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            className = 'text-input'
            autoFocus
            value={this.state.description}
            onChange={(e) => {
              this.onDescriptionchange(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="amount"
            className = 'text-input'
            value={this.state.amount}
            onChange={this.onAmountchange}
          />

          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarfocused} // PropTypes.bool
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
            id="singledatepicker" // PropTypes.string.isRequired,
          />

          <textarea
            placeholder="Note for Expense (optional)"
            className = 'textarea'
            value={this.state.note}
            onChange={this.onNotechange}
          />
          
          <div>
          <button className = 'button'>Add Expense</button>
          </div>
          
        </form>
    );
  }
}
