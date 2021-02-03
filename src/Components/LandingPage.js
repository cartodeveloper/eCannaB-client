import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

/*TokenService.hasAuthToken() ? (
    <Redirect to="/home" />
  ) :*/

function LandingPage() {
  return (
    <div className="landing-page">
      <section>
        <h2>LandingPage</h2>
      </section>
    </div>
  );
}

export default LandingPage;
