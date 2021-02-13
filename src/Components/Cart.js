import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

class Cart extends Component {
  static contextType = Context;

  render() {
    let { cart = [] } = this.context;
    return (
      <section>
        <h2>This is the cart</h2>
        <ul>
          {cart.map((cart) => (
            <li key={cart.pid}>
              PRODUCT ID: {cart.pid}
              <p>{cart.p_title}</p>
              <p>${cart.price}</p>
            </li>
          ))}
        </ul>
        <hr />
        <h3>
          TOTAL:{" $"}
          {parseFloat(
            cart.reduce((total, p) => {
              return total + Number(p.price);
            }, 0)
          )}
        </h3>
      </section>
    );
  }
}

export default Cart;
