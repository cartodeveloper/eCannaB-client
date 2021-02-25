import Context from "../../Context";
import React, { Component } from "react";
import Resource from "../Resource/Resource";

class ResourcesList extends Component {
  static contextType = Context;

  render() {
    let { resources = [] } = this.context;

    return (
      <ul id="flex-container" aria-live="polite">
        {resources.map((resource) => (
          <Resource key={resource.id} {...resource} {...this.props} />
        ))}
      </ul>
    );
  }
}
export default ResourcesList;
