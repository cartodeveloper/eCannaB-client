import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import tokenService from "../services/token-service";
import Context from "../Context";

export default class Header extends React.Component {
  static contextType = Context;
  logout = (e) => {
    e.preventDefault();
    tokenService.clearAuthToken();
    this.context.logout();
    this.props.history.push("/");
  };
  state = {
    opened: false,
  };

  render() {
    return (
      <header>
        <section className="logo">
          <h1>
            <Link to="/">
              <img src="/images/5.png" alt="seller_logo" />
            </Link>
          </h1>
        </section>
        {tokenService.hasAuthToken() ? (
          <>
            <section className="user">
              <Link
                to="/logout"
                className="logout"
                aria-label="logout"
                type="submit"
                onClick={(e) => this.logout(e)}
              >
                Logout
              </Link>
            </section>
            <nav onClick={() => this.setState({ opened: !this.state.opened })}>
              <div className="nav-icon">
                <img src="/images/nav_icon.png" alt="nav_icon" />
              </div>
              {this.state.opened && (
                <ul id="menu">
                  <Link to="/addproduct">
                    <li>+ Product</li>
                  </Link>
                  <Link to="/addresource">
                    <li>+ Resource</li>
                  </Link>
                  {!this.context.sites.length && (
                    <Link to="/addsite">
                      <li>+ Site</li>
                    </Link>
                  )}
                  {this.context.sites.length ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`/s/${this.context.sites[0].subdomain}`}
                    >
                      <li>My Site</li>
                    </a>
                  ) : (
                    <p></p>
                  )}
                </ul>
              )}
            </nav>
          </>
        ) : (
          <>
            <section className="user">
              <Link to="/login">Login</Link>
            </section>
            <section className="user">
              <Link to="/signup">Signup</Link>
            </section>
          </>
        )}
      </header>
    );
  }
}
