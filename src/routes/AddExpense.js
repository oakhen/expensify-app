import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "../components/playground/ExpenseForm";

function AddExpense(props) {
  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
        }}
      />
    </div>
  );
}

export default connect()(AddExpense);

/* behind the scene yaha kaise ho raha hai ye abhi bhi humko clear nai hai. but  */
