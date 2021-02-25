import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import DeleteResource from "../DeleteResource/DeleteResource";

export default class Resource extends Component {
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
        <div className="flex-row">
          <div className="group">
            <button type="click">
              <Link to={`/editresource/${id}`}>Edit</Link>
            </button>
            <DeleteResource id={id} history={this.props.history} />
          </div>
        </div>
      </li>
    );
  }
}
