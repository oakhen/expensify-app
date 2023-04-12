import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";
function TextFilter(props) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
        value={props.filters.text}
        // placeholder={props.filters.text}
      />
      <select
        value={props.filters.sortBy} // value jo ki ek html element hai. jo javascript se generate
        // ho raha toh ye kahlaega controlled value
        onChange={(e) => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate());
          }
          if (e.target.value === "amount") {
            props.dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const TextFilterInput = connect(mapStateToProps)(TextFilter);
export default TextFilterInput;

/*  */
