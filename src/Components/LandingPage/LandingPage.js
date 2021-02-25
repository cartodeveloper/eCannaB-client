import React from "react";
import TokenService from "../../services/token-service";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function LandingPage() {
  return TokenService.hasAuthToken() ? (
    <Redirect to="/dashboard" />
  ) : (
    <section className="landing-page">
      <div id="landing-banner">
        <h2>
          Were you looking for a place to create a simple, elegant and efficient
          page for your online cbd business?
        </h2>
        <p>
          Well, apparently we were thinking of you ... because you just found
          it!
        </p>
      </div>
      <h2>How does it work?</h2>
      <section className="landing-group">
        <h2>Create a site.</h2>
        <p>
          Once you are registered you can submit a form with your site
          information.
        </p>
        <p> *The subdomain should be your company name.</p>
      </section>
      <video width="100%" height="400" controls>
        <source src="/videos/1.mp4" type="video/mp4" />
      </video>
      <section className="landing-group">
        <h2>Add Products and Resources to your site.</h2>
        <p>
          In your dashboard you can create products and resources, plus you can
          edit or delete them at any time.
        </p>
      </section>
      <video width="100%" height="400" controls>
        <source src="/videos/2.mp4" type="video/mp4" />
      </video>
      <section className="landing-group">
        <h2>Share your website link.</h2>
        <p>
          Share the site with your customers, so that every day a more reliable
          relationship grows.
        </p>
      </section>
      <video width="100%" height="400" controls>
        <source src="/videos/3.mp4" type="video/mp4" />
      </video>
      <section className="landing-group">
        <h2>Let your customers register on your site.</h2>
        <p>
          A login system is implemented directly on your site, so that your
          customers have secure and private access when they want to add
          products to the cart or when they want to see resources.
        </p>
      </section>
      <video width="100%" height="400" controls>
        <source src="/videos/4.mp4" type="video/mp4" />
      </video>

      <div id="landing-banner2">
        <h3>
          Now is time to complete your registration creating your account!
        </h3>
        <p>
          You are one step away from creating your first CBD SITE, how exciting
          does that feel?
        </p>
        <h2 className="register">
          <Link to="/signup">Register</Link>
        </h2>
      </div>
    </section>
  );
}

export default LandingPage;
