import React, { Component } from "react";
import "../App.css";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import Context from "../Context";
import DeleteSite from "./DeleteSite";
import ResourcesList from "./ResourcesList";

class Dashboard extends Component {
  static contextType = Context;

  render() {
    let { sites = [] } = this.context;

    return (
      <section className="dashboard">
        <h1>DASHBOARD</h1>

        <section className="flex" id="banner-site">
          <div className="group">
            <fieldset>
              <legend>
                <h2>Your Site</h2>
              </legend>
              {!sites.length && (
                <Link className="site" to="/addsite">
                  CREATE NEW SITE
                </Link>
              )}
              {sites.map((site) => (
                <li key={site.id}>
                  <a
                    className="site"
                    target="_blank"
                    rel="noreferrer"
                    href={`/s/${site.subdomain}`}
                  >
                    {site.subdomain}
                  </a>
                  <div className="banner-buttons">
                    <button>
                      <Link to={`/editsite/${site.id}`}>Edit</Link>
                    </button>
                    <DeleteSite id={site.id} history={this.props.history} />
                  </div>
                </li>
              ))}
            </fieldset>
          </div>
        </section>
        <section id="all-resources">
          <h2>ALL RESOURCES</h2>
          <button type="click" id="c-r">
            <Link to="/addresource">Add Resource</Link>
          </button>
          {this.context.resources.length ? (
            <ResourcesList {...this.props} />
          ) : (
            <p>No resources available yet...</p>
          )}
        </section>
        {/*
            {resources.map((resource) => (
              <li key={resource.id}>
                <a target="_blank" rel="noreferrer" href={resource.link}>
                  {resource.name}
                </a>
                <div className="resourceSiteBtn">
                  <button
                    onClick={() =>
                      this.context.addResourceToSite(
                        this.context.sites[0].id,
                        resource
                      )
                    }
                  >
                    Add to Site
                  </button>
                </div>
              </li>
            ))} */}

        <section className="flex" id="products-user">
          <div className="group">
            <h2 id="h2">PRODUCTS</h2>
            <button type="click" id="c-p">
              <Link to="/addproduct">CREATE NEW PRODUCT</Link>
            </button>
            {this.context.products.length ? (
              <ProductList {...this.props} />
            ) : (
              <p>No product has been created so far...</p>
            )}
          </div>
        </section>
      </section>
    );
  }
}

export default Dashboard;
