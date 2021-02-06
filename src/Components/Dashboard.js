import React, { Component } from "react";
import "../App.css";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import Context from "../Context";
import Order from "./Order";

class Dashboard extends Component {
  static contextType = Context;
  render() {
    let { orders = [] } = this.context;
    let { resources = [] } = this.context;

    return (
      <section className="dashboard">
        <h1>DASHBOARD</h1>
        <section className="flex">
          <div className="group">
            <h2>ALL RESOURCES</h2>
            <button type="click">
              <Link to="/addresource">Add Resource</Link>
            </button>
            {resources.map((resource) => (
              <li>
                <Link to={resource.link}>{resource.name}</Link>
                <button
                  onClick={() =>
                    this.context.addResourceToSite(
                      this.context.siteID,
                      resource.id
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
                  <th>DATE</th>
                  <th>TOTAL </th>
                  <th>QUANTITY</th>
                  <th>STATUS</th>
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
        <section className="flex">
          <div className="group">
            <h2>PRODUCTS</h2>
            <button type="click">
              <Link to="/addproduct">CREATE NEW PRODUCT</Link>
            </button>
            <ProductList {...this.props} />
          </div>
        </section>
      </section>
    );
  }
}

export default Dashboard;
