import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

class Cart extends Component {
  static contextType = Context;
  state = {
    error: null,
  };

  render() {
    return (
      <section>
        <h2>This is the cart</h2>
        <section className="user">
          <Link to="/s/:subdomain/login">Login</Link>
        </section>
      </section>
    );
  }
}

export default Cart;
