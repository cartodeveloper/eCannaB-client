import React, { Component } from "react";
import Context from "../Context";

class AddToCart extends Component {
  static contextType = Context;
  state = {
    error: null,
    p_Cart: {},
  };

  handleSubmit = (e) => {
    let id = this.props;
    e.preventDefault();
    this.setState({ error: null });
    /* fetch(`${config.API_BASE_URL}/cart`, {
      method: "POST",
      body: JSON.stringify(this.state.p_Cart),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenService.getAuthToken()}`,
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
      .then((p_Cart) => {
        e.target.reset();
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
      */
    this.context.addToCart(this.state.p_Cart, id);
    this.props.history.push("/siteproducts");
  };

  render() {
    return (
      <button
        type="button"
        name="addToCart"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        Add To Cart
      </button>
    );
  }
}

export default AddToCart;
