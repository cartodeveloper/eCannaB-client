import React, { Component } from "react";
import "../App.css";

class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <h1>DASHBOARD</h1>
        <section className="flex">
          <h2>ORDERS</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>CUSTOMER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>QUANTITY</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pepito</td>
                <td>02/2/2021</td>
                <td>12</td>
                <td>2000</td>
                <td>Procesing</td>
                <td>
                  <button type="button" className="small">
                    Edit
                  </button>
                  <button type="button" className="small">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <h2>PRODUCTS</h2>
          </div>
        </section>
      </section>
    );
  }
}

export default Dashboard;
