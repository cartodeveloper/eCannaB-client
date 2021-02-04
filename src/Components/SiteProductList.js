import Context from "../Context";
import React, { Component } from "react";
import SiteProduct from "./SiteProduct";

class SiteProductList extends Component {
  static contextType = Context;
  state = {};

  render() {
    let { products = [] } = this.context;
    return (
      <ul className="flex" aria-live="polite">
        {products.map((product) => (
          <SiteProduct key={product.id} {...product} {...this.props} />
        ))}
      </ul>
    );
  }
}
export default SiteProductList;
