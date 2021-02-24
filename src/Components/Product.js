import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import DeleteProduct from "./DeleteProduct";

export default class Product extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
  render() {
    const { id, title, p_image, price, in_stock, brand, p_description } = this
      .props
      ? this.props
      : this.context.products.find(
          (p) => p.id === Number(this.props.match.params.id)
        );

    return (
      <li className="product" key={id}>
        <div className="group">
          <img src={p_image} alt="product" />
          <h3>{brand}</h3>
        </div>
        <div className="group">
          <h2>{title}</h2>
          <p>
            {" $"}
            {price}
          </p>
          <p>in Stock:</p>
          <span>{in_stock}</span>
          <p>Product Description:</p>
          <span>{p_description}</span>
          <div className="controls">
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
