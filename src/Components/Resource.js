import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

export default class Resource extends Component {
  static contextType = Context;
  render() {
    const { id, link } = this.props;
    return (
      <section className="resource">
        {id}
        <a href={link} target="_blank" rel="noreferrer">
          Resource
        </a>
        <button>Add to my site</button>
      </section>
    );
  }
}
