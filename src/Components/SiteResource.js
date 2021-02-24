import React, { Component } from "react";
import Context from "../Context";

export default class SiteResource extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };
  render() {
    const { id, name, r_image, link } = this.props.id
      ? this.props
      : this.context.resources.find(
          (r) => r.id === Number(this.props.match.params.id)
        );

    return (
      <li key={id}>
        <div className="group">
          <img src={r_image} alt="resource" />
          <h3>
            <a target="_blank" rel="noreferrer" href={link}>
              {name}
            </a>
          </h3>
        </div>
      </li>
    );
  }
}
