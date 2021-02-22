import React, { Component } from "react";
import "../App.css";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import Context from "../Context";
import Order from "./Order";
import DeleteSite from "./DeleteSite";

class Dashboard extends Component {
  static contextType = Context;

  render() {
    let { orders = [] } = this.context;
    let { resources = [] } = this.context;
    let { sites = [] } = this.context;

    return (
      <section className="dashboard">
        <h1>DASHBOARD</h1>

        <section className="flex" id="banner-site">
          <div className="group">
            <fieldset>
              <legend>
                <h2>Your Site</h2>
              </legend>
              {!sites.length && (
                <Link className="site" to="/addsite">
                  CREATE NEW SITE
                </Link>
              )}
              {sites.map((site) => (
                <li key={site.id}>
                  <Link className="site" to={`/s/${site.subdomain}`}>
                    {site.subdomain}
                  </Link>
                  <div className="banner-buttons">
                    <button>
                      <Link to={`/editsite/${site.id}`}>Edit</Link>
                    </button>
                    <DeleteSite id={site.id} history={this.props.history} />
                  </div>
                </li>
              ))}
            </fieldset>
          </div>
        </section>
        <section className="flex" id="site-r-o">
          <div className="group" id="all-resources">
            <h2>ALL RESOURCES</h2>
            <button type="click">
              <Link to="/addresource">Add Resource</Link>
            </button>
            {resources.map((resource) => (
              <li key={resource.id}>
                <a target="_blank" rel="noreferrer" href={resource.link}>
                  {resource.name}
                </a>
                <button
                  onClick={() =>
                    this.context.addResourceToSite(
                      this.context.sites[0].id,
                      resource
                    )
                  }
                >
                  Add to Site
                </button>
              </li>
            ))}
          </div>
          <div className="group">
            <h2>ORDERS</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CUSTOMER</th>
                  <th>TOTAL </th>
                  <th>PRODUCTS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <Order key={order.id} {...order} {...this.props} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="flex" id="products-user">
          <div className="group">
            <h2 id="h2">PRODUCTS</h2>
            <button type="click" id="c-p">
              <Link to="/addproduct">CREATE NEW PRODUCT</Link>
            </button>
            {this.context.products.length ? (
              <ProductList {...this.props} />
            ) : (
              <p>No product has been created so far..</p>
            )}
          </div>
        </section>
      </section>
    );
  }
}

export default Dashboard;
