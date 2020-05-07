import React, { Component } from "react";
import Item from "./components/Item";

import "./App.css";

class App extends Component {
  state = {
    cart: [
      {
        name: "scarf",
        price: "11.50",
        quantity: 1,
      },
      {
        name: "Shirt",
        price: "11.50",
        quantity: 1,
      },
      {
        name: "scarf",
        price: "11.50",
        quantity: 1,
      },
    ],
    isOnMailingList: false,
  };

  onChangeItem = (item) => {
    // This should get called any time you change an item!
    // Since the item is in a list, you must create a new list to put
    // into setState
    this.setState((previousState) => {
      // Notice how this is a function!
      // When you pass a function into setState, it will call your function
      // and give you the previous state object.  You must use this previousState
      // to access the state. You can't use this.state inside of a setState call.
      // This is because of the way React processes events, events in React might happen out of order.

      // use the .map function to create a new list.
      // when the map item matches the item you changed, then assign it to a new object
      // and return that.  Remember, you must always create a new Object or Array when you are
      // modifying them in state!  That is the only way React knows you changed something.
      const newList = previousState.cart.map((existingItem) => {
        if (item === existingItem) {
          return Object.assign({}, existingItem);
        }
        return existingItem;
      });

      // Return a state object, with cart set to your new list.
      return {
        cart: newList,
      };
    });
  };

  onCheckout = () => {
    alert(
      "Purchase Completed!" +
        (this.state.isOnMailingList
          ? " You will be added to the mailing list!"
          : "")
    );
  };

  render() {
    return (
      <div className="app">
        <h2>Shopping Cart</h2>
        <ul className="list">
          {this.state.cart.map((item) => (
            <li>
              <Item add properties here />
            </li>
          ))}
        </ul>
        <div>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.isOnMailingList}
              onChange={(event) =>
                // Your Code Here! Update the state with the new value of checked
                this.setState()
              }
            />
            Sign me up for the mailing list!
          </label>
        </div>
        <button onClick={this.onCheckout}>Purchase</button>
      </div>
    );
  }
}

export default App;
