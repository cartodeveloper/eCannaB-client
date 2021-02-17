import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import config from "../config";
import tokenService from "../services/token-service-customer";

class Cart extends Component {
  static contextType = Context;
  state = {
    error: null,
    newOrder: {},
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      newOrder: { ...this.state.newOrder },
    });
    this.setState({ error: null });
    fetch(`${config.API_BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(this.state.newOrder),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenService.getAuthTokenSite()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((newOrder) => {
        e.target.reset();
        this.context.addOrder(newOrder);
        this.props.history.push(`/s/${this.props.match.params.subdomain}`);
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  }

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
        <section className="order">
          <button>Place your order</button>
        </section>
      </section>
    );
  }
}

export default Cart;
