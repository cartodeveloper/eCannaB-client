import React, { Component } from "react";
import TokenService from "../services/token-service";
import { Link } from "react-router-dom";
import Context from "../Context";
import tokenServiceCustomer from "../services/token-service-customer";

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
    return tokenServiceCustomer.hasAuthTokenSite() ? (
      <footer className="site-footer">
        Copyright © 2021 {this.props.match.params.subdomain} Powered by
        <Link to="/"> eCannaB</Link>
      </footer>
    ) : (
      <footer className="eCannab-footer">© 2021 eCannaB, Inc.</footer>
    );
  }
}
export default Footer;
