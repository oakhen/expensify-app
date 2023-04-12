import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

// !IMPORTANT

/* one more important thing is that default parametars are inharently conditional */
/* empty object is important and why it is important is not known somewhat makes sense but it is hard to 
picture */

/* hum ek empty object daal rahe hai break hone se bachane ke liye doesnot make too much sense to me */
/* ek aisa function banate hai jo as a first argument ek object le */

/* jub hum number le rahe the as an argument toh merepass limited kewal ek data aa raha tha.
par agar mere paas object aa jae toh kitna sara data object me aa sakta hai. isliye apna object ko aisa baou
ki wo obj as an argument le.
*/

/* REDUCERS reducers jaha tak humko lagta hai. ye ek aisa term hai which is completed associated with redux ka hi term hai. 


actions describe the fact that somethig happenned. but don't specify how aplicaton sates
changes in response.this is the job of a reducer


*/

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      const decrement = !!action.decrementBy ? action.decrementBy : 1;
      return {
        count: state.count - decrement,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

/* ek chiz hum notice kiye ki yaha pe hum counter reducer function ko refer kiye hai 
usko invoke nai. kiye hai. */

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// /* subscribe will fire everytime the store changes */

// /* Dispatches  */
// unsubscribe();

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 4 }));

store.dispatch(decrementCount());
store.dispatch(
  decrementCount({
    decrementBy: 10,
  }),
);

store.dispatch(resetCount());
store.dispatch(
  setCount({
    count: 100,
  }),
);

store.dispatch(setCount());
store.dispatch(
  setCount({
    count: 101,
  }),
);

console.log(store.getState());
