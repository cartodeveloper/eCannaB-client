import Context from "../../Context";
import React, { Component } from "react";
import Order from "./Order";

class Orders extends Component {
  static contextType = Context;

  render() {
    let { orders = [] } = this.context;
    return (
      <tr className="orders" aria-live="polite">
        {orders.map((order) => (
          <Order key={order.id} {...order} {...this.props} />
        ))}
      </tr>
    );
  }
}
export default Orders;
