import React, { Component } from "react";
import Context from "../Context";

class EditOrder extends Component {
  static contextType = Context;
  state = {
    error: null,
    newOrder: {},
  };

  handleChange(e) {
    this.setState({
      newOrder: { ...this.state.newOrder, [e.target.name]: e.target.value },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Number(this.props.match.params.id);
    this.setState({ error: null });
    /* fetch(`${config.API_BASE_URL}/orders/&{id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.newProduct),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenService.getAuthToken()}`,
      }, 
    }) 
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((newOrder) => {
        e.target.reset();
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
      */
    this.context.updateOrder(this.state.newOrder, id);
    this.props.history.push("/dashboard");
  };
  componentDidMount() {
    setTimeout(() => {
      const id = Number(this.props.match.params.id);
      const order = this.context.orders.find((o) => o.id === id);
      this.setState({
        newOrder: order,
      });
    }, 1000);
  }

  render() {
    const { error, newOrder } = this.state;
    return newOrder ? (
      <section className="edit_order">
        <h2>Edit Order</h2>
        <form
          onSubmit={this.handleSubmit}
          className="edit_order"
          aria-label="edit_order"
        >
          {error && <p className="order_id">{error}</p>}
          <fieldset>
            <legend>Order Details</legend>
            <div className="order_id">
              <label htmlFor="id" aria-label="id">
                <h3>Order Id: </h3>
              </label>
              <input
                type="order_id"
                id="order_id"
                name="order_id"
                value={newOrder.id || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="order_c_name">
              <label htmlFor="order_c_name" aria-label="order_c_name">
                <h3>Order Name: *</h3>
              </label>
              <input
                type="text"
                id="order_c_name"
                name="order_c_name"
                value={newOrder.customer_name || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="">
              <label htmlFor="c_total" aria-label="c_total">
                <h3>Total Paid: *</h3>
              </label>
              <input
                placeholder="$160.00"
                type="number"
                id="c_total"
                name="c_total"
                value={newOrder.total || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <section className="buttons-form">
              <button type="submit" onClick={this.handleClickCancel}>
                Cancel
              </button>
              <button type="submit">Update Order</button>
            </section>
          </fieldset>
        </form>
      </section>
    ) : (
      <h2>Loading Product...</h2>
    );
  }
}

export default EditOrder;
