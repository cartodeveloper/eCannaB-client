import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import tokenService from "../services/token-service";

export default class Header extends React.Component {
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
