import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenServiceCustomer from "../services/token-service-customer";
import "../App.css";

class Cart extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
  state = {
    error: null,
    newOrder: {},
  };
  handleClickCancel = () => {
    this.props.history.push(`/s/${this.props.match.params.subdomain}`);
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
        authorization: `Bearer ${tokenServiceCustomer.getAuthTokenSite()}`,
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
      <section id="myModal" className="modal">
        <div className="modal-content">
          <span onClick={this.handleClickCancel} className="close">
            &times;
          </span>
          <h2>Cart</h2>
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
        </div>
      </section>
    );
  }
}

export default Cart;
