import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

export default class Order extends Component {
  static contextType = Context;
  render() {
    let { order = [] } = this.context;
    const { id, customer_name, date, total, quantity, status } = this.props;
    return (
      <tr className="orders">
        <td>{id}</td>
        <td>{customer_name}</td>
        <td>{date}</td>
        <td>{total}</td>
        <td>{quantity}</td>
        <td>{status}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}
