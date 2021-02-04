import Context from "../Context";
import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  static contextType = Context;
  state = {};

  render() {
    let { products = [] } = this.context;
    return (
      <ul className="flex" aria-live="polite">
        {products.map((product) => (
          <Product key={product.id} {...product} {...this.props} />
        ))}
      </ul>
    );
  }
}
export default ProductList;
