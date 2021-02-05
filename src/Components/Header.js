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
          <Link to="/login">Login</Link>
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
              <Link to="/subdomain">
                <li>My Site</li>
              </Link>
            </ul>
          )}
        </nav>
      </header>
    );
  }
}
