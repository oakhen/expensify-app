/* EXPENSES REDUCER */

import { v4 as uid } from "uuid";

/* default state */
const expenseReducerDefaultState = [
  {
    id: uid(),
    description: "January Rent",
    note: "So janury rent was complete and i also completed the all small dues of last year",
    amount: 54500,
    createdAt: 0, //actual time handler later
  },
];

export default (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [action.expense, ...state];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expen) => {
        if (expen.id === action.id) {
          return { ...expen, ...action.update };
        } else return expen;
      });
    default:
      return state;
  }
};
