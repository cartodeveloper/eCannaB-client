import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

/*TokenService.hasAuthToken() ? (
    <Redirect to="/home" />
  ) :*/

function SiteLanding() {
  return (
    <div className="landing_site">
      <section>
        <h2>Landing Page for Seller Site</h2>
      </section>
    </div>
  );
}

export default SiteLanding;
