import Context from "../Context";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SiteProduct from "./SiteProduct";
import tokenServiceCustomer from "../services/token-service-customer";
import SiteResource from "../Components/SiteResource";

class SiteHome extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
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

    let { resources = [] } = this.context;

    return (
      <section className="home">
        <h2>{site.seller_description}</h2>
        <section>
          <img src={site.banner} alt="site-banner" />
        </section>
        <section>
          <h2>RESOURCES</h2>

          {this.context.resources.lenght ? (
            <p>No resources available at the moment</p>
          ) : (
            <>
              {tokenServiceCustomer.hasAuthTokenSite() ? (
                <>
                  <ul id="flex-container" aria-live="polite">
                    {resources.map((r) => (
                      <SiteResource key={r.id} {...r} {...this.props} />
                    ))}
                  </ul>
                </>
              ) : (
                <section className="login">
                  <Link to={`/s/${this.props.match.params.subdomain}/login`}>
                    Login
                  </Link>
                  <p>Please be sure to login to see the resources available.</p>
                </section>
              )}
            </>
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
