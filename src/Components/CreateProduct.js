import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenService from "../services/token-service";

class CreateProduct extends Component {
  static contextType = Context;
  state = {
    error: null,
    newProduct: {},
  };

  handleChange(e) {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [e.target.name]: e.target.value,
      },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const product = this.state.newProduct;
    product.site_id = this.context.sites[0].id;
    fetch(`${config.API_BASE_URL}/products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((newProduct) => {
        e.target.reset();
        this.context.addProduct(newProduct);
        this.props.history.push("/dashboard");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };
  render() {
    const { error } = this.state;
    const { sites = [] } = this.context;
    return (
      <section className="create-product">
        <h2>Create a new product...</h2>
        <p>All fields with * are required</p>
        <form
          onSubmit={this.handleSubmit}
          className="product-form"
          aria-label="create-product"
        >
          {error && <p className="error">{error}</p>}
          <fieldset>
            <legend>Product Details</legend>

            <div className="title">
              <label htmlFor="title" aria-label="title">
                <h3>Brand: *</h3>
              </label>
              <input
                placeholder="MOMENTUM 10X"
                type="text"
                id="brand"
                name="brand"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="title">
              <label htmlFor="title" aria-label="title">
                <h3>Title: *</h3>
              </label>
              <input
                placeholder="eg. Multipurpose Oil Nano CBD 600mg"
                type="text"
                id="title"
                name="title"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="price">
              <label htmlFor="price" aria-label="price">
                <h3>Price: *</h3>
              </label>
              <input
                placeholder="$160.00"
                type="number"
                id="price"
                name="price"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="in_stock">
              <label htmlFor="in_stock" aria-label="in_stock">
                <h3>In Stock: *</h3>
              </label>
              <input
                placeholder="500"
                type="number"
                id="in_stock"
                name="in_stock"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="p_image">
              <label htmlFor="p_image" aria-label="p_image">
                <h3>Product Image: *</h3>
                <p>Please provide an image url</p>
              </label>
              <input
                placeholder="https://..."
                type="url"
                id="p_image"
                name="p_image"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <h3>Description:</h3>
            <p>
              In a paragraph, give your customer a description of the product.
            </p>
            <textarea
              id="p_description"
              name="p_description"
              rows="5"
              cols="50"
              onChange={(e) => this.handleChange(e)}
              placeholder="Amazing NANO CBD 100% Bioavailability- NON GMO"
            ></textarea>
            <section className="buttons-form">
              <button type="submit" onClick={this.handleClickCancel}>
                Cancel
              </button>
              <button type="submit">Create Product</button>
            </section>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default CreateProduct;
