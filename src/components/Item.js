import React from "react";
import Quantity from "./Quantity";

function Item(props) {
  return (
    <span>
      Item Name - Item Price -
      <Quantity add properties here />
    </span>
  );
}

export default Item;
