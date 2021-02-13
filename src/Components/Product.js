import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import DeleteProduct from "./DeleteProduct";

export default class Product extends Component {
  static contextType = Context;
  render() {
    const {
      id,
      title,
      p_image,
      price,
      in_stock,
      brand,
      p_description,
      site_id,
    } = this.props.id
      ? this.props
      : this.context.products.find(
          (p) => p.id === Number(this.props.match.params.id)
        );

    return (
      <li className="product" key={id}>
        <div className="card">
          <div className="group">
            <Link to={`/product/${id}`}>
              <img src={p_image} alt="product" />
            </Link>
          </div>
          <div className="group">
            <h2>{title}</h2>
            <h4>
              {brand} | Site ID: {site_id}
            </h4>
            <p>Price: {price}</p>
            <p>in Stock: {in_stock}</p>
            <p>Product Description: {p_description}</p>
            <button type="click">
              <Link to={`/editproduct/${id}`}>Edit</Link>
            </button>
            <DeleteProduct id={id} history={this.props.history} />
          </div>
        </div>
      </li>
    );
  }
}
