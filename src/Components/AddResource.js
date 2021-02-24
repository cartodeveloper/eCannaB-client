import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenService from "../services/token-service";

export default class AddResource extends Component {
  static contextType = Context;
  state = {
    error: null,
    newResource: {},
  };
  handleChange(e) {
    this.setState({
      newResource: {
        ...this.state.newResource,
        [e.target.name]: e.target.value,
      },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const resource = this.state.newResource;
    resource.site_id = this.context.sites[0].id;
    fetch(`${config.API_BASE_URL}/resources`, {
      method: "POST",
      body: JSON.stringify(resource),
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
      .then((newResource) => {
        e.target.reset();
        this.context.addResource(newResource);
        this.props.history.push("/dashboard");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section id="myModal" className="modal">
        <div className="modal-content">
          <span onClick={this.handleClickCancel} className="close">
            &times;
          </span>
          <form
            className="add_resource"
            aria-label="add_resource"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            {error && <p className="error">{error}</p>}
            <fieldset>
              <legend>Add Resource</legend>
              <div className="name">
                <label htmlFor="name" aria-label="name">
                  <h3>Resource Name: *</h3>
                </label>
                <input
                  placeholder="eg. Why Nano CBD?"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </div>
              <div className="link">
                <label htmlFor="link" aria-label="link">
                  <h3>Resource Link: *</h3>
                </label>
                <input
                  placeholder="https://..."
                  type="url"
                  id="link"
                  name="link"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </div>
              <div>
                <label htmlFor="r_image" aria-label="r_image">
                  <h3>Resource Image: *</h3>
                  <p>Please provide an image url</p>
                </label>
                <input
                  placeholder="https://..."
                  type="url"
                  id="r_image"
                  name="r_image"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </div>
              <button type="submit">Add Resource</button>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}
