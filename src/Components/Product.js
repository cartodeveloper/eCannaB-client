import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import DeleteButton from "./DeleteButton";
import data from "../data";

export default class Product extends Component {
  static contextType = Context;
  render() {
    const {
      id,
      title,
      p_image,
      price,
      countInStock,
      brand,
      p_description,
    } = this.props.id
      ? this.props
      : this.context.products.find(
          (p) => p.id === Number(this.props.match.params.id)
        );

    return (
      <li className="product" key={id}>
        <div className="card">
          <Link to={`/product/${id}`}>
            <img src={p_image} alt="product" />
            <h2>{title}</h2>
          </Link>
          <p>Price: {price}</p>
          <p>Brand: {brand}</p>
          <p>in Stock: {countInStock}</p>
          <p>Product Description: {p_description}</p>
          <button type="click">
            <Link to={`/editproduct/${id}`}>Edit</Link>
          </button>
          <DeleteButton key={Product} id={id} history={this.props.history} />
        </div>
      </li>
    );
  }
}
