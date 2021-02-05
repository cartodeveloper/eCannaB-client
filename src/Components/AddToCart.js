import React, { Component } from "react";

class AddToCart extends Component {
  render() {
    return (
      <button
        type="button"
        name="addToCart"
        onClick={() => this.props.addToCart(this.props.product)}
      >
        Add To Cart
      </button>
    );
  }
}

export default AddToCart;
