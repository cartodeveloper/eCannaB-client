import React, { Component } from "react";
import Context from "../Context";

class EditProduct extends Component {
  static contextType = Context;
  state = {
    error: null,
    newProduct: {},
  };

  handleChange(e) {
    this.setState({
      newProduct: { ...this.state.newProduct, [e.target.name]: e.target.value },
    });
  }
  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Number(this.props.match.params.id);
    this.setState({ error: null });
    /* fetch(`${config.API_BASE_URL}/products/&{id}`, {
      method: "PUT",
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
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
      */
    this.context.updateProduct(this.state.newProduct, id);
    this.props.history.push("/dashboard");
  };
  componentDidMount() {
    setTimeout(() => {
      const id = Number(this.props.match.params.id);
      const product = this.context.products.find((p) => p.id === id);
      this.setState({
        newProduct: product,
      });
    }, 1000);
  }

  render() {
    const { error, newProduct } = this.state;
    return newProduct ? (
      <section className="create-product">
        <h2>Edit your product...</h2>
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
                <h3>Title: *</h3>
              </label>
              <input
                placeholder="eg. Multipurpose Oil Nano CBD 600mg"
                type="text"
                id="title"
                name="title"
                value={newProduct.title || ""}
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
                value={newProduct.price || ""}
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
                value={newProduct.in_stock || ""}
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
                value={newProduct.p_image || ""}
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
              value={newProduct.p_description || ""}
              onChange={(e) => this.handleChange(e)}
              placeholder="Amazing NANO CBD 100% Bioavailability- NON GMO"
            ></textarea>
            <section className="buttons-form">
              <button type="submit" onClick={this.handleClickCancel}>
                Cancel
              </button>
              <button type="submit">Update Product</button>
            </section>
          </fieldset>
        </form>
      </section>
    ) : (
      <h2>Loading Product...</h2>
    );
  }
}

export default EditProduct;
