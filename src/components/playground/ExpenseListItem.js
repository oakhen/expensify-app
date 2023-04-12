import React from "react";
import { Link } from "react-router-dom";

function Item({ id, description, amount, createdAt }) {
  return (
    <div className="expense">
      <Link to={`edit/${id}`}>
        <h3>description:{description}</h3>{" "}
      </Link>
      <h3>amount:${amount}</h3>
      <h3>created:{createdAt}</h3>
    </div>
  );
}

export default Item;
