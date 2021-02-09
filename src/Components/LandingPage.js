import React from "react";
import TokenService from "../services/token-service";
import { Redirect } from "react-router-dom";

function LandingPage() {
  return TokenService.hasAuthToken() ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="landing-page">
      <section>
        <h2>LandingPage</h2>
      </section>
    </div>
  );
}

export default LandingPage;
