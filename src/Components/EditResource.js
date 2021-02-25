import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenService from "../services/token-service";

class EditResource extends Component {
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
    const id = Number(this.props.match.params.id);
    this.setState({ error: null });
    fetch(`${config.API_BASE_URL}/resources/${id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.newResource),
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
        this.context.updateResource(newResource, id);
        this.props.history.push("/dashboard");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };
  componentDidMount() {
    setTimeout(() => {
      const id = Number(this.props.match.params.id);
      const resource = this.context.resources.find((r) => r.id === id);
      this.setState({
        newResource: resource,
      });
    }, 1000);
  }
  render() {
    const { error, newResource } = this.state;
    return newResource ? (
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
            <h2>Edit Resource</h2>
            <div className="name">
              <label htmlFor="name" aria-label="name">
                <h3>Resource Name: *</h3>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newResource.name || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="link">
              <label htmlFor="link" aria-label="link">
                <h3>Resource Link: *</h3>
              </label>
              <input
                type="url"
                id="link"
                name="link"
                value={newResource.link || ""}
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
                type="url"
                id="r_image"
                name="r_image"
                value={newResource.r_image || ""}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <button type="submit">Edit Resource</button>
          </form>
        </div>
      </section>
    ) : (
      <h2>Loading Resource...</h2>
    );
  }
}

export default EditResource;
