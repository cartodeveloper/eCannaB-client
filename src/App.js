import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Singup";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import LandingPage from "./Components/LandingPage";
import CreateSite from "./Components/CreateSite";
import CreateProduct from "./Components/CreateProduct";
import EditProduct from "./Components/EditProduct";
import EditOrder from "./Components/EditOrder";
import data from "./data";
import Context from "./Context";
import SiteLogin from "./Components/SiteLogin";
import SiteSignup from "./Components/SiteSignup";
import SiteLanding from "./Components/SiteLanding";
import SiteHeader from "./Components/SiteHeader";
import AddResource from "./Components/AddResource";
import SiteProduct from "./Components/SiteProduct";

class App extends Component {
  state = {
    orders: data.ORDERS,
    products: data.PRODUCTS,
    resources: data.RESOURCES,
    cart: [],
    sites: data.SITES,
    error: null,

    // SITES
    addSite: (newSite) => {
      this.setState({
        sites: [...this.state.sites, newSite],
      });
    },
    addToSite: (newSiteResource) => {
      this.setState({
        sites: [...this.state.sites, newSiteResource],
      });
    },

    // PRODUCTS
    addProduct: (newProduct) => {
      this.setState({
        products: [...this.state.products, newProduct],
      });
    },
    updateProduct: (newProduct, id) => {
      this.setState({
        products: this.state.products.map((p) => {
          if (p.id === id) {
            return newProduct;
          }
          return p;
        }),
      });
    },
    deleteProduct: (id) => {
      this.setState({
        products: this.state.products.filter((p) => p.id !== id),
      });
    },
    // CART
    addToCart: (product) => {
      this.setState({
        cart: [...this.state.cart, product],
      });
    },
    // ORDERS
    updateOrder: (newOrder, id) => {
      this.setState({
        products: this.state.products.map((o) => {
          if (o.id === id) {
            return newOrder;
          }
          return o;
        }),
      });
    },
    deleteOrder: (id) => {
      this.setState({
        orders: this.state.orders.filter((o) => o.id !== id),
      });
    },

    // RESOURCES
    addResource: (newResource) => {
      this.setState({
        resources: [...this.state.resources, newResource],
      });
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <Route path="/" component={Header} />
          <Route exact path="/subdomain" component={SiteHeader} />
          <main className="main">
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addsite" component={CreateSite} />
            <Route path="/addresource" component={AddResource} />
            <Route path="/addproduct" component={CreateProduct} />
            <Route path="/editorder/:id" component={EditOrder} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/product/:id" component={Product} />
            <Route exact path="/sitelanding" component={SiteLanding} />
            <Route path="/sitesignup" component={SiteSignup} />
            <Route path="/sitelogin" component={SiteLogin} />
            <Route path="/siteproduct/:id" component={SiteProduct} />
            <Route path="/siteproducts" component={SiteProduct} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
