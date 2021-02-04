import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import AddToSiteButton from "./AddToSiteButton";

export default class Resource extends Component {
  static contextType = Context;
  render() {
    const { link } = this.props;
    return (
      <li className="resource">
        <a href={link} target="_blank" rel="noreferrer">
          Resource
        </a>
        <AddToSiteButton history={this.props.history} />
      </li>
    );
  }
}
