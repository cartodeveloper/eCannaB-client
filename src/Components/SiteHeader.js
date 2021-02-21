import React from "react";
import { Link } from "react-router-dom";
import tokenService from "../services/token-service-customer";
import Context from "../Context";
import "../App.css";

export default class SiteHeader extends React.Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
  logoutCustomer = (e) => {
    e.preventDefault();
    tokenService.clearAuthTokenSite();
    this.context.logoutCustomer();
    this.props.history.push(`/s/${this.props.match.params.subdomain}`);
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
            <Link to={`/s/${this.props.match.params.subdomain}`}>
              <img src={s.logo} alt="seller_logo" />
            </Link>
          </h1>
        </section>
        {tokenService.hasAuthTokenSite() ? (
          <>
            <section className="user">
              <Link
                to="/customerlogout"
                className="logout"
                aria-label="logout"
                type="submit"
                onClick={(e) => this.logoutCustomer(e)}
              >
                Logout
              </Link>
            </section>
            <nav>
              <div className="nav-icon">
                <h3>
                  <Link to={`/s/${this.props.match.params.subdomain}/cart`}>
                    <i className="fas fa-shopping-cart" />
                  </Link>
                </h3>
              </div>
            </nav>
          </>
        ) : (
          <section className="user">
            <Link to={`/s/${this.props.match.params.subdomain}/login`}>
              Login
            </Link>
          </section>
        )}
      </header>
    );
  }
}
