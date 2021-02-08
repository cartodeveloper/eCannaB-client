import Context from "../Context";
import React, { Component } from "react";
import SiteProduct from "./SiteProduct";

class SiteProductList extends Component {
  static contextType = Context;
  state = {};

  render() {
    let { products = [] } = this.context;
    const s =
      this.context.sites.find(
        (site) => site.subdomain === this.props.match.params.subdomain
      ) || {};
    return (
      <section className="home">
        <h2>{s.seller_description}</h2>
        <section>
          <img src={s.banner} alt="site-banner" />
        </section>
        <h2>PRODUCTS AVAILABLE</h2>
        <ul className="flex" aria-live="polite">
          {products.map((p) => (
            <SiteProduct key={p.id} {...p} {...this.props} />
          ))}
        </ul>
      </section>
    );
  }
}
export default SiteProductList;
