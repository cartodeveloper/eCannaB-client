import Context from "../Context";
import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  static contextType = Context;

  render() {
    let { products = [] } = this.context;
    return (
      <section className="flex">
        <ul className="product-list" aria-live="polite">
          {products.map((product) => (
            <Product key={product.id} {...product} {...this.props} />
          ))}
        </ul>
      </section>
    );
  }
}
export default ProductList;
