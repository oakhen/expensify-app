import { combineReducers, createStore } from "redux";
import { v4 as uid } from "uuid";

/* humlog ye sara actions achieve karna hai */

/* ye sare actions ke liye humko action generators create karna hai. */

// ADD_EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uid(),
    description,
    note,
    amount,
    createdAt,
  },
});
// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id, // id provide karne ka jimmewari user ko hai.
});
// EDIT_EXPENSE

const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});
// SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
// SET_START_DATE

const setStartDate = (date) => ({
  type: "SET_START_DATE",
  date,
});
// SET_END_DATE

const setEndDate = (date) => ({
  type: "SET_END_DATE",
  date,
});

/* EXPENSES REDUCER */

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

const expeseReducer = (state = expenseReducerDefaultState, action) => {
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
/* FILTERS REDUCER */

/* default state */
const filtersReducerDefalultState = {
  text: "some demo text",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefalultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date,
      };
    default:
      return state;
  }
};

/* Get filtered expenses */

/* time stamp */
/* timestapm is number in millisecond */
/* unxi epoch 1st january 1970 */
/* agar koi event ko usse pehle dikhan hai to hum 
-ve me number show karenge */

const getVisibleExpenses = (expeseses, { text, sortBy, startDate, endDate }) =>
  expeseses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      const textMatch =
        typeof text !== "string" ||
        expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch; // && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });

/* suru me mereko ye samjh nai ayay par ye bohot mast logic hai. */
/* Store */

const store = createStore(
  combineReducers({
    expenses: expeseReducer, // expense mera root state hai aur iska value hai expeseReducer ka current state
    filters: filtersReducer,
  }),
);
const { expenses, filters } = store.getState();

/* SUBSCRIBE */
store.subscribe(() => {
  const state = store.getState();

  getVisibleExpenses(state.expenses, state.filters);

  console.log(getVisibleExpenses(state.expenses, state.filters));
  // console.log(state);
});

const expenseOne = store.dispatch(
  addExpense({ description: "emi", amount: 100, createdAt: 1000 }),
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300, createdAt: -1000 }),
);
const expenseThree = store.dispatch(
  addExpense({ description: "chicken", amount: 500, createdAt: 3000 }),
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(
//   editExpense(expenseThree.expense.id, { amount: 200, description: "mutton" }),
// );

// store.dispatch(setTextFilter("EMI"));
// store.dispatch(setTextFilter("chicken"));

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));

/* yaha pe toh kchada k pahad ho gaya hai par humko yaha pe drill karne ka jarurat hai  */

/* here key expense is the root state name */
// console.log(expenses, filters);

/* demo satate */
const demostate = {
  expenses: [
    {
      id: "nohnhsath",
      description: "January Rent",
      note: "So janury rent was complete and i also completed the all small dues of last year",
      amount: 54500,
      createdAt: 0, //actual time handler later
    },
  ],
  filters: {
    text: "rent",
    sortBy: "date", //date/amount
    startDate: undefined, //  these two will make us a range of time to filter
    endDate: undefined, //
  },
};
