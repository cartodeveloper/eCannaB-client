import React, { Component } from "react";

import { Link } from "react-router-dom";
import Context from "../Context";

class Footer extends Component {
  static contextType = Context;
  static defaultProps = {
    match: {
      params: {
        id: 0,
      },
    },
  };

  render() {
    let siteSubdomain = this.context.sites.map((site) => {
      return site.subdomain;
    });
    return siteSubdomain ? (
      <footer className="eCannab-footer">
        <p>Copyright © 2021</p>
        <Link to="/">
          <img src="/images/5.png" alt="seller_logo" />
        </Link>
      </footer>
    ) : (
      <footer className="site-footer">
        © 2021 <a href={siteSubdomain}>{siteSubdomain}</a>, Inc. Powered by:{" "}
        <Link to="/"> eCannaB </Link>
      </footer>
    );
  }
}
export default Footer;
