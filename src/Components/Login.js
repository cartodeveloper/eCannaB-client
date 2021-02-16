import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import AuthAPIService from "../services/auth-api-service";
import TokenService from "../services/token-service";

export default class Login extends Component {
  static contextType = Context;
  state = {
    error: null,
  };
  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    const user = { email: email.value, password: password.value };

    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.context.getSites();
        this.context.getProducts();
        this.context.getResources();
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <section>
        <form
          className="login-form"
          aria-label="login-form"
          onSubmit={this.handleLogin}
        >
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset aria-label="email">
            <legend>Login</legend>
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
              New customer? <Link to="/signup">Create your account</Link>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}
