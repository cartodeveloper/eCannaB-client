import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SiteSignup extends Component {
  state = {
    error: null,
  };

  /*
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = e.target;
    this.setState({ error: null });

    if (password.value !== confirmPassword.value) {
      return this.setState({ error: "Passwords do not match" });
    }
    AuthAPIService.postUser({
      name: name.value,
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        this.props.history.push("/sitelogin");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
*/
  render() {
    return (
      <section>
        <form
          className="singup-form"
          aria-label="signup-form"
          onSubmit={this.handleSubmit}
        >
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset>
            <legend>SITE Create Account</legend>
            <div className="flex-wrap">
              <label htmlFor="name">Name</label>
              <div className="input-icons">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  id="new-name"
                />
              </div>
            </div>
            <div className="flex-wrap">
              <label htmlFor="new-email">Email</label>
              <div className="input-icons">
                <i className="fa fa-envelope icon"></i>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="new-email"
                />
              </div>
            </div>
            <div className="flex-wrap">
              <label htmlFor="new-password">Password</label>
              <div className="input-icons">
                <i className="fa fa-key icon"></i>
                <input
                  id="new-password"
                  type="password"
                  placeholder="new password"
                  name="password"
                />
              </div>

              <label htmlFor="confirm-password">Confirm password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="type password again"
                name="confirmPassword"
              />
            </div>
            <button type="submit" aria-label="signup">
              Sign Up
            </button>
            <div>
              Already have an account? <Link to="/sitelogin"> Login</Link>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}
