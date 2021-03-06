import React, { Component } from "react";
import Context from "../../Context";
import config from "../../config";
import tokenServiceCustomer from "../../services/token-service-customer";
import "../../App/App.css";

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

  AddCartToOrder(e) {
    this.setState({
      newOrder: {
        ...this.state.newOrder,
      },
    });
  }
  cartToState = () => {};

  handleClick(e) {
    e.preventDefault();
    //let order = e.target.value;

    let payload = {
      cart: e.target.value,
    };
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
  componentDidMount() {
    setTimeout(() => {
      const id = Number(this.props.match.params.id);
      const order = this.context.cart.map((c) => c.id === id);
      this.setState({
        newOrder: order,
      });
    }, 1000);
  }

  render() {
    let { cart = [] } = this.context;
    let total = cart.reduce((total, p) => {
      return total + Number(p.price);
    }, 0);

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
            <button onClick={this.handleClick}>
              <em>Cooming soon implementation to place orders</em>
            </button>
          </section>
        </div>
      </section>
    );
  }
}

export default Cart;
