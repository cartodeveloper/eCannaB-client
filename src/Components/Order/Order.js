import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteOrder from "../Components/DeleteOrder";
import Context from "../../Context";

export default class Order extends Component {
  static contextType = Context;
  render() {
    const { id, customer_name, total, p_title } = this.props
      ? this.props
      : this.context.products.find(
          (p) => p.id === Number(this.props.match.params.id)
        );
    return (
      <tr className="orders">
        <td>{id}</td>
        <td>{customer_name}</td>
        <td>{total}</td>
        <td>{p_title}</td>
        <td>
          <Link to={`/editorder/${id}`}>Edit</Link>
          <DeleteOrder id={id} history={this.props.history} />
        </td>
      </tr>
    );
  }
}
