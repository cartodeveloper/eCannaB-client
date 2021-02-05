import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import "../App.css";

export default class SiteHeader extends React.Component {
  static contextType = Context;

  state = {
    opened: false,
  };

  render() {
    const { logo } = this.props;
    return (
      <header>
        <section className="logo">
          <h1>
            <Link to="/subdomain">
              <img src={logo} alt="seller_logo" />
            </Link>
          </h1>
        </section>
        <section className="user">
          <Link to="/sitelogin">Login</Link>
        </section>
        <nav onClick={() => this.setState({ opened: !this.state.opened })}>
          <div className="nav-icon">
            <h3>NAV</h3>
          </div>
          {this.state.opened && (
            <ul id="menu">
              <Link to="/cart">
                <li>Cart</li>
              </Link>
              <Link to="/siteproducts">
                <li>Products</li>
              </Link>
              <Link to="/resources">
                <li>Resources</li>
              </Link>
            </ul>
          )}
        </nav>
      </header>
    );
  }
}
