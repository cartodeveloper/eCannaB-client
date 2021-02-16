import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenService from "../services/token-service";

class CreateSite extends Component {
  static contextType = Context;
  state = {
    error: null,
    newSite: {},
  };

  handleChange(e) {
    this.setState({
      newSite: { ...this.state.newSite, [e.target.name]: e.target.value },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    fetch(`${config.API_BASE_URL}/s`, {
      method: "POST",
      body: JSON.stringify(this.state.newSite),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((newSite) => {
        e.target.reset();
        this.context.addSite(newSite);
        this.props.history.push("/dashboard");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <section className="create-site">
        <h2>Fill out the form with your site information</h2>
        <p>All fields with * are required</p>
        <form
          onSubmit={this.handleSubmit}
          className="site-form"
          aria-label="create-site"
        >
          {error && <p className="error">{error}</p>}
          <fieldset>
            <legend>Your Site</legend>
            <div className="brand">
              <label htmlFor="brand" aria-label="brand">
                <h3>Site/Brand Name: *</h3>
              </label>
              <input
                placeholder="eg. Momentum 10X"
                type="text"
                id="brand"
                name="brand"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="subdomain">
              <label htmlFor="subdomain" aria-label="subdomain">
                <h3>Subdomain: *</h3>
              </label>
              <input
                placeholder="eg. /momentum10x"
                type="text"
                id="subdomain"
                name="subdomain"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="logo">
              <label htmlFor="logo" aria-label="logo">
                <h3>Logo: *</h3>
                <p>Please provide an image url</p>
              </label>
              <input
                placeholder="https://..."
                type="url"
                id="logo"
                name="logo"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="banner">
              <label htmlFor="banner" aria-label="banner">
                <h3>Banner Image: </h3>
                <p>Please provide an image url</p>
              </label>
              <input
                placeholder="https://..."
                type="url"
                id="banner"
                name="banner"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <h3>Description: *</h3>
            <p>
              In a paragraph, explain what your brand is about and what
              differentiates it from the others.
            </p>
            <textarea
              id="seller_description"
              name="seller_description"
              rows="5"
              cols="50"
              onChange={(e) => this.handleChange(e)}
              placeholder="We're a brand commited with the health and overall wellness!"
            ></textarea>
            <section className="buttons-form">
              <button type="submit" onClick={this.handleClickCancel}>
                Cancel
              </button>
              <button type="submit">Create Site</button>
            </section>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default CreateSite;
