import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthAPIService from "../services/auth-api-service";
import tokenServiceCustomer from "../services/token-service-customer";

export default class SiteLogin extends Component {
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
  state = {
    error: null,
  };
  handleClickCancel = () => {
    this.props.history.push(`/s/${this.props.match.params.subdomain}`);
  };
  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    const customer = { email: email.value, password: password.value };

    AuthAPIService.loginCustomer(customer)
      .then((loginResponse) => {
        tokenServiceCustomer.saveAuthTokenSite(loginResponse.authToken);
        this.props.history.push(`/s/${this.props.match.params.subdomain}`);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <section id="myModal" className="modal">
        <div className="modal-content" id="login-modal">
          <span onClick={this.handleClickCancel} className="close">
            &times;
          </span>
          <form
            className="login-form"
            aria-label="login-form"
            onSubmit={this.handleLogin}
          >
            {this.state.error && <p className="error">{this.state.error}</p>}

            <h2>Login</h2>
            <div className="flex-wrap">
              <label className="login-email" htmlFor="email">
                Email
              </label>
              <div className="input-icons">
                <i className="fa fa-envelope icon"></i>
                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="flex-wrap">
              <label htmlFor="password" className="login-pw">
                Password
              </label>
              <div className="input-icons">
                <i className="fa fa-key icon"></i>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  name="password"
                />
              </div>
            </div>
            <button className="login" type="submit" aria-label="login">
              Login
            </button>
            <div>
              New customer?{" "}
              <Link to={`/s/${this.props.match.params.subdomain}/signup`}>
                Create your account
              </Link>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
