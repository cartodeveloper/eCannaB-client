import React, { Component } from "react";
import Context from "../Context";

export default class AddToSiteButton extends Component {
  static contextType = Context;
  state = {
    error: null,
    newSiteResource: {},
  };
  handleAdd(e) {
    e.preventDefault();
    this.setState({
      newSiteResource: {
        ...this.state.newSiteResource,
      },
    });
    this.context.addToSite(this.state.newSiteResource);
    this.props.history.push("/resources");
  }

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
