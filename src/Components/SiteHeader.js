import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import Context from "../Context";
import "../App.css";

export default class SiteHeader extends React.Component {
  static contextType = Context;
  logout = (e) => {
    e.preventDefault();
    TokenService.clearAuthToken();
    this.context.logout();
    this.props.history.push("/");
  };

  state = {
    opened: false,
  };

  render() {
    const s =
      this.context.sites.find(
        (site) => site.subdomain === this.props.match.params.subdomain
      ) || {};
    return (
      <header>
        <section className="logo">
          <h1>
            <Link to="/s/:subdomain">
              <img src={s.logo} alt="seller_logo" />
            </Link>
          </h1>
        </section>
        <section className="user">
          <Link to="/s/:subdomain/login">Login</Link>
        </section>
        <nav onClick={() => this.setState({ opened: !this.state.opened })}>
          <div className="nav-icon">
            <h3>NAV</h3>
          </div>
          {this.state.opened && (
            <ul id="menu">
              <Link to="/s/:subdomain/cart">
                <li>Cart</li>
              </Link>
              <Link to="/s/:subdomain/resources">
                <li>Resources</li>
              </Link>
            </ul>
          )}
        </nav>
      </header>
    );
  }
}
