import React from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "../components/playground/ExpenseForm";

function EditExpense(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={
          props.expenses.find(
            (expens) => expens.id === id,
          ) /* this will pass store object of selected item */
        }
        onSubmit={(expense) => {
          props.dispatch(editExpense(id, expense));

          navigate("/");
        }}
      />
      Ediexpense{id}
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id }));
          navigate("/");
        }}
      >
        remove
      </button>
      <Outlet />
    </div>
  );
}

/* YAHA PE EK DO CHIZ DRILL KARNE KE LAYAK HAI USKO DRILL KARO TABHI AAGE BADHNA. */

/* what are we solving here and how are we solving.
first we need the available data. we need to dispatch the edited data
*/

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses,
    myprops: props,
  };
};
export default connect(mapStateToProps)(EditExpense);
