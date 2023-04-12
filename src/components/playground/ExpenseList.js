import React from "react";
import { connect } from "react-redux";
import getVisibleExpense from "../../selectors/Shorted";
import ExpenseListItem from "./ExpenseListItem";
function ExpenseList(props) {
  return (
    <div>
      {props.expenses.map((objet) => (
        <ExpenseListItem key={objet.id} {...objet} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  funny:
    "my custom key value property can also sit here any props paasde to hoc ",
  expenses: getVisibleExpense(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
