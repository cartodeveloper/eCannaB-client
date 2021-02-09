import React, { Component } from "react";
import Context from "../Context";

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
        id: this.context.products.length + 1,
      },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    /* fetch(`${config.API_BASE_URL}/resources`, {
      method: "POST",
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
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
      */
    this.context.addResource(this.state.newResource);
    this.props.history.push("/dashboard");
  };
  render() {
    const { error } = this.state;
    return (
      <section>
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
            <button type="submit" onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button type="submit">Add Resource</button>
          </fieldset>
        </form>
      </section>
    );
  }
}
