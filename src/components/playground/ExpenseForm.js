import "react-dates/initialize";
import moment from "moment/moment";
import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import { connect } from "react-redux";

class ExpenseForm extends Component {
  /* we may need to access the state here  */

  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : 0,
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  /* things here are totally out of my mind dude here  */

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description });
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  onNoteChaneg = (e) => {
    this.setState({ note: e.target.value });

    /* yaha pe setState pe hum direct object de rahe lekin agar hum callback de ke 
    object return karwate toh humko e.target.value ko ya toh cons me save karna hota ya fir e.persist() ka use karna hota */
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please Provide Description and Amount!" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }

    /* ye chize mere dimaag se thoda sa nikal gaya ki opposite direction me hum data kaise pass karenge */
    // props.dispatch(addExpense(this.state));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {!!this.state.error && (
            <p style={{ color: "red" }}> {this.state.error}</p>
          )}

          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            value={this.state.note}
            placeholder="add note about your expense(optional)"
            cols="30"
            rows="10"
            onChange={this.onNoteChaneg}
          ></textarea>
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={({ focused }) =>
              this.setState({ calendarFocused: focused })
            }
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default connect()(ExpenseForm);
