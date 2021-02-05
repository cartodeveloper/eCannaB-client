import React, { Component } from "react";
import Context from "../Context";
import Resource from "../Context";

export default class SiteResources extends Component {
  static contextType = Context;

  render() {
    let { sites = [] } = this.context;
    return (
      <section className="site_resources">
        {sites.map((resource) => (
          <Resource key={resource.id} {...resource} {...this.props} />
        ))}
      </section>
    );
  }
}
