import React from "react";
import TokenService from "../services/token-service";
import { Redirect } from "react-router-dom";

function LandingPage() {
  return TokenService.hasAuthToken() ? (
    <Redirect to="/dashboard" />
  ) : (
    <section className="landing-page">
      <div className="video-form">
        <video width="100%" height="400" controls>
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default LandingPage;
