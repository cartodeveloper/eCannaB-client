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
            <Link to="/">eCannaB</Link>
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
                <h3>MENU</h3>
              </div>
              {this.state.opened && (
                <ul id="menu">
                  <Link to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                  <Link to="/addproduct">
                    <li>+ Product</li>
                  </Link>
                  <Link to="/addsite">
                    <li>+ Site</li>
                  </Link>
                  <Link to="/s/:subdomain">
                    <li>My Site</li>
                  </Link>
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
