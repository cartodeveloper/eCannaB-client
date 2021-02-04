import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import { v4 as uuidv4 } from "uuid";

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
        link: e.target.value,
        id: uuidv4(),
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
            <div className="resource">
              <label htmlFor="resource" aria-label="resource">
                <h3>Resource Link: *</h3>
              </label>
              <input
                placeholder="https://..."
                type="url"
                id="resource"
                name="resource"
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
