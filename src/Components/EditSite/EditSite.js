import React, { Component } from "react";
import Context from "../../Context";
import config from "../../config";
import tokenService from "../../services/token-service";

class EditSite extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
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
    const id = Number(this.props.match.params.id);
    this.setState({ error: null });
    fetch(`${config.API_BASE_URL}/s/${id}`, {
      method: "PUT",
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
        this.context.updateSite(newSite, id);
        this.props.history.push("/dashboard");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };
  componentDidMount() {
    setTimeout(() => {
      const id = Number(this.props.match.params.id);
      const site = this.context.sites.find((s) => s.id === id);
      this.setState({
        newSite: site,
      });
    }, 1000);
  }
  render() {
    const { error, newSite } = this.state;
    return newSite ? (
      <section id="myModal" className="modal">
        <div className="modal-content">
          <span onClick={this.handleClickCancel} className="close">
            &times;
          </span>

          <p>All fields with * are required. Please provide an image url. </p>

          <form
            onSubmit={this.handleSubmit}
            className="site-form"
            aria-label="create-site"
          >
            {error && <p className="error">{error}</p>}

            <h2>Edit Site</h2>
            <div className="brand">
              <label htmlFor="brand" aria-label="brand">
                <h3>Site/Brand Name:*</h3>
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={newSite.brand || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="subdomain">
              <label htmlFor="subdomain" aria-label="subdomain">
                <h3>Subdomain: *</h3>
              </label>
              <input
                type="text"
                id="subdomain"
                name="subdomain"
                value={newSite.subdomain || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="logo">
              <label htmlFor="logo" aria-label="logo">
                <h3>Logo Image: *</h3>
              </label>
              <input
                type="url"
                id="logo"
                name="logo"
                value={newSite.logo || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="banner">
              <label htmlFor="banner" aria-label="banner">
                <h3>Banner Image: </h3>
              </label>
              <input
                type="url"
                id="banner"
                name="banner"
                value={newSite.banner || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <h3>Description: *</h3>
            <textarea
              id="seller_description"
              name="seller_description"
              rows="4"
              cols="40"
              value={newSite.seller_description || ""}
              onChange={(e) => this.handleChange(e)}
            ></textarea>
            <section className="buttons-form">
              <button type="submit">Update Site</button>
            </section>
          </form>
        </div>
      </section>
    ) : (
      <h2>Loading Site...</h2>
    );
  }
}

export default EditSite;
