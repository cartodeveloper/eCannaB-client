import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteOrder from "../Components/DeleteOrder";
import Context from "../Context";

export default class Order extends Component {
  static contextType = Context;
  render() {
    const { id, customer_name, date, total, quantity, status } = this.props.id
      ? this.props
      : this.context.products.find(
          (p) => p.id === Number(this.props.match.params.id)
        );
    return (
      <tr className="orders">
        <td>{id}</td>
        <td>{customer_name}</td>
        <td>{date}</td>
        <td>{total}</td>
        <td>{quantity}</td>
        <td>{status}</td>
        <td>
          <Link to={`/editorder/${id}`}>Edit</Link>
          <DeleteOrder key={Order} id={id} history={this.props.history} />
        </td>
      </tr>
    );
  }
}
