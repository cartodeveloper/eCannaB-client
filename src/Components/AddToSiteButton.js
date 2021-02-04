import React, { Component } from "react";
import Context from "../Context";

export default class AddToSiteButton extends Component {
  static contextType = Context;
  static contextType = Context;
  state = {
    error: null,
    newSiteResource: {},
  };
  handleChange(e) {
    this.setState({
      newSiteResource: {
        ...this.state.newSiteResource,
      },
    });
  }

  handleAdd = () => {
    this.context.addResource(this.state.newResource);
    this.props.history.push("/resources");
  };

  render() {
    return (
      <div className="add_to_site">
        <button
          onClick={(e) => {
            this.handleAdd(e);
          }}
        >
          Add To Site
        </button>
      </div>
    );
  }
}
