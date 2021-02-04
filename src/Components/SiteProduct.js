import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

export default class SiteProduct extends Component {
  static contextType = Context;

  render() {
    const { id, title, p_image, price, inStock, brand, p_description } = this
      .props.id
      ? this.props
      : this.context.products.find(
          (p) => p.id === Number(this.props.match.params.id)
        );

    return (
      <li className="product" key={id}>
        <div className="card">
          <div className="group">
            <Link to={`/siteproduct/${id}`}>
              <img src={p_image} alt="product" />
            </Link>
          </div>
          <div className="group">
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <p>Brand: {brand}</p>
            <p>Available: {inStock}</p>
            <p>Product Description: {p_description}</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </li>
    );
  }
}
