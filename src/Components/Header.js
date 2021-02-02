import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

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
        <section className="user">
          <Link to="/singup">Signup</Link>
        </section>
        <nav onClick={() => this.setState({ opened: !this.state.opened })}>
          <div className="nav-icon">
            <h3>MENU</h3>
          </div>
          {this.state.opened && (
            <ul id="menu">
              <Link to="/">
                <li>Dashboard</li>
              </Link>
              <Link to="/">
                <li>Products</li>
              </Link>
              <Link to="/">
                <li>Orders</li>
              </Link>
            </ul>
          )}
        </nav>
      </header>
    );
  }
}
