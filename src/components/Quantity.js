import React from "react";

function Quantity(props) {
  const onIncrement = () => {
    // Your Code Here!
    // Increment the quantity and then call onChange from the parent
  };

  const onDecrement = () => {
    // Your Code Here!
    // Dcrement the quantity and then call onChange from the parent
  };

  return (
    <span>
      <button onClick={onDecrement}>-</button>
      Item Quantity
      <button onClick={onIncrement}>+</button>
    </span>
  );
}

export default Quantity;
