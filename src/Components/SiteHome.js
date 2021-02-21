import Context from "../Context";
import React, { Component } from "react";
import SiteProduct from "./SiteProduct";
import { Link } from "react-router-dom";

class SiteHome extends Component {
  static contextType = Context;
  state = {
    filter: {
      title: "",
    },
    filterValue: "all",
  };

  setFilter = (key, value) => {
    this.setState({
      filter: { ...this.state.filter, [key]: value },
    });
  };

  filterProducts = () => {
    let { products = [] } = this.context;
    let { filter } = this.state;

    if (filter.title !== "") {
      products = products.filter((p) =>
        p.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    }
    return products;
  };

  render() {
    const products = this.filterProducts();
    const site =
      this.context.sites.find(
        (site) => site.subdomain === this.props.match.params.subdomain
      ) || {};

    return (
      <section className="home">
        <h2>{site.seller_description}</h2>
        <section>
          <img src={site.banner} alt="site-banner" />
        </section>
        <section>
          <h2>RESOURCES</h2>
          {site.resources == null ? (
            <>
              <p>No Resources available at the moment...</p>
            </>
          ) : (
            Object.keys(site.resources).map((siteResource, i) => (
              <li className="site-resources" key={i}>
                <span className="site-resource-link">
                  <a
                    href={site.resources[siteResource].link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {site.resources[siteResource].name}
                  </a>
                </span>
              </li>
            ))
          )}
        </section>
        <hr />
        <h2>PRODUCTS AVAILABLE</h2>
        <section className="input-search">
          <input
            type="text"
            id="search-term"
            placeholder="search..."
            onChange={(e) => this.setFilter("title", e.target.value)}
          ></input>
        </section>
        <hr />
        <ul className="flex" aria-live="polite">
          {products.map((p) => (
            <SiteProduct key={p.id} {...p} {...this.props} />
          ))}
        </ul>
      </section>
    );
  }
}
export default SiteHome;
