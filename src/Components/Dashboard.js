import React, { Component } from "react";
import "../App.css";
import ProductList from "./ProductList";
import Context from "../Context";
import Order from "./Order";
import Resource from "./Resource";

class Dashboard extends Component {
  static contextType = Context;
  render() {
    let { orders = [] } = this.context;
    let { resources = [] } = this.context;
    return (
      <section className="dashboard">
        <h1>DASHBOARD</h1>
        <section>
          <div className="group">
            <h2>CONTROLS (Search bar)</h2>
          </div>
        </section>
        <section className="flex">
          <div className="group">
            <h2>RESOURCES</h2>
            {resources.map((resource) => (
              <Resource key={resource.id} {...resource} {...this.props} />
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
            <ProductList {...this.props} />
          </div>
        </section>
      </section>
    );
  }
}

export default Dashboard;