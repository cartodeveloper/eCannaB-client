import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import tokenService from "../services/token-service-customer";

export default class SiteProduct extends Component {
  static contextType = Context;

  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };

  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleAddToCart = () => {
    let pid = this.props.id;
    this.context.products.map((product) => {
      let p_title = product.title;
      let price = product.price;
      if (product.id === pid) {
        this.context.addToCart(pid, p_title, price);
        return this.props.history.push(
          `/s/${this.props.match.params.subdomain}/cart`
        );
      }
      return pid;
    });
  };

  render() {
    const { id, title, p_image, price, inStock, brand, p_description } = this
      .props.id
      ? this.props
      : this.context.products.find(
          (p) => p.id === Number(this.props.match.params.id)
        );

    return (
      <li className="product" key={id}>
        <div className="card">
          <div className="group">
            <img src={p_image} alt="product" />
          </div>
          <div className="group">
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <p>Brand: {brand}</p>
            <p>Available: {inStock}</p>
            <p>Product Description: {p_description}</p>

            {this.context.cart.find((p) => p.pid === id) ? (
              <span>In Cart</span>
            ) : (
              <>
                {tokenService.hasAuthTokenSite() ? (
                  <>
                    <button onClick={this.handleAddToCart}>Add To Cart</button>
                  </>
                ) : (
                  <section className="user">
                    <p>Please be sure to Login to make an order.</p>
                    <Link to={`/s/${this.props.match.params.subdomain}/login`}>
                      Login
                    </Link>
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      </li>
    );
  }
}
