import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

class Cart extends Component {
  static contextType = Context;
  state = {
    error: null,
    total: 0,
  };

  render() {
    let { cart = [] } = this.context;
    return (
      <section>
        <h2>This is the cart</h2>
        <ul>
          {cart.map((cart) => (
            <li key={cart.id}>
              PRODUCT ID: {cart.pid}
              <p>{cart.p_title}</p>
              <p>${cart.price}</p>
            </li>
          ))}
        </ul>
        <hr />
        <h3>TOTAL:</h3>
        <section className="user">
          <Link to="/s/:subdomain/login">Login</Link>
        </section>
      </section>
    );
  }
}

export default Cart;
