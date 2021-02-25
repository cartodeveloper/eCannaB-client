import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";

class SiteFooter extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };

  render() {
    const siteSubdomain = this.context.sites.map((s) => {
      return s.subdomain;
    });

    return (
      <footer className="site-footer">
        © 2021 <a href={siteSubdomain}>{siteSubdomain}</a>
        Powered by:
        <Link to="/">
          eCannaB <i className="fas fa-leaf"></i>
        </Link>
      </footer>
    );
  }
}
export default SiteFooter;
