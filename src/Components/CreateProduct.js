import React, { Component } from "react";
import Context from "../Context";

class CreateProduct extends Component {
  static contextType = Context;
  state = {
    error: null,
    newProduct: {},
  };

  handleChange(e) {
    this.setState({
      newSite: { ...this.state.newSite, [e.target.name]: e.target.value },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    /* fetch(`${config.API_BASE_URL}/products`, {
      method: "POST",
      body: JSON.stringify(this.state.newProduct),
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
        this.props.history.push("/products");
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
      */
  };
  render() {
    const { error } = this.state;
    return (
      <section className="create-product">
        <h2>Create a new product...</h2>
        <p>All fields with * are required</p>
        <form className="product-form" aria-label="create-product">
          {error && <p className="error">{error}</p>}
          <fieldset>
            <legend>Product Details</legend>
            <div className="product-title">
              <label htmlFor="product-title" aria-label="product-title">
                <h3>Title: *</h3>
              </label>
              <input
                placeholder="eg. Multipurpose Oil Nano CBD 600mg"
                type="text"
                id="product-title"
                name="product-title"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="product-price">
              <label htmlFor="product-price" aria-label="product-price">
                <h3>Price: *</h3>
              </label>
              <input
                placeholder="$160.00"
                type="number"
                id="product-price"
                name="product-price"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="in-stock">
              <label htmlFor="in-stock" aria-label="in-stock">
                <h3>In Stock: *</h3>
              </label>
              <input
                placeholder="500"
                type="number"
                id="in-stock"
                name="in-stock"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <div className="product-image">
              <label htmlFor="product-image" aria-label="product-image">
                <h3>Product Image: *</h3>
                <p>Please provide an image url</p>
              </label>
              <input
                placeholder="https://..."
                type="url"
                id="product-image"
                name="product-image"
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
            <h3>Description:</h3>
            <p>
              In a paragraph, give your customer a description of the product.
            </p>
            <textarea
              id="product-description"
              name="product-description"
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
