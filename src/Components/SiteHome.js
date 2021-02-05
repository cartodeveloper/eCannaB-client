import React, { Component } from "react";
import Context from "../Context";

class SiteHome extends Component {
  static contextType = Context;

  render() {
    return (
      <section className="site_home">
        <h2>Site Home</h2>
      </section>
    );
  }
}
export default SiteHome;
