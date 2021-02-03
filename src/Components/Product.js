import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import data from "../data";

export default class Product extends Component {
  static contextType = Context;
  render() {
    let { product = [] } = this.context;
    const {
      title,
      image,
      price,
      countInStock,
      brand,
      description,
    } = this.props;
    return (
      <li className="product" key={this.props.id}>
        <div className="card">
          <Link to="/product">
            <img src={image} alt="product" />
            <h2>{title}</h2>
          </Link>
          <p>Price: {price}</p>
          <p>Brand: {brand}</p>
          <p>in Stock: {countInStock}</p>
          <p>Product Description: {description}</p>
          {/* If user is Seller can edit and delete / if is a seller customer btn=Add to cart + quantity input ON*/}
          <button>Edit</button>
          <button>Delete</button>
          <button>Add to my site</button>
        </div>
      </li>
    );
  }
}
