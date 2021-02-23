import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenServiceCustomer from "../services/token-service-customer";
import "../App.css";

class Cart extends Component {
  static contextType = Context;

  handleClickCancel = () => {
    this.props.history.push(`/s/${this.props.match.params.subdomain}`);
  };
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
  state = {
    error: null,
    newOrder: {
      cart: [],
    },
  };

  /*AddCartToOrder(e) {
this.setState({
newOrder: {
...this.state.newOrder,
},
});
}*/
  cartToState = () => {};

  handleClick(e) {
    e.preventDefault();
    let customer_id = tokenServiceCustomer.getCustomerId();
    //let order = e.target.value;

    let payload = {
      customer_id: customer_id,
      cart: e.target.value,
    };

    console.log(payload, "this is the paylod");
    //this.setState({ error: null });
    fetch(`${config.API_BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(payload),
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
        //this.setState({ error: e.message });
      });
  }

  render() {
    let { cart = [] } = this.context;
    let total = cart.reduce((total, p) => {
      return total + Number(p.price);
    }, 0);
    console.log();
    console.log(cart, "this is the cart");
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
            {parseFloat(total)}
          </h3>
          <section className="order">
            <button onClick={this.handleClick}>Place your order</button>
          </section>
        </div>
      </section>
    );
  }
}

export default Cart;
