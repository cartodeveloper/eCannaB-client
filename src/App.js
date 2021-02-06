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
import SiteHeader from "./Components/SiteHeader";
import AddResource from "./Components/AddResource";
import SiteProduct from "./Components/SiteProduct";
import SiteProductList from "./Components/SiteProductList";
import SiteHome from "./Components/SiteHome";

class App extends Component {
  state = {
    orders: data.ORDERS,
    products: data.PRODUCTS,
    resources: data.RESOURCES,
    cart: [],
    siteID: 1,
    sites: data.SITES,
    siteProducts: data.SITEPRODUCTS,
    error: null,

    // SITES
    addSite: (newSite) => {
      this.setState({
        sites: [...this.state.sites, newSite],
      });
    },
    addResourceToSite: (siteid, resourceid) => {
      this.setState({
        sites: [
          ...this.state.sites.map((s) => {
            if (s.id === siteid) {
              s.resources = [...s.resources, resourceid];
            }
            return s;
          }),
        ],
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
    addToCart: (pid, qty) => {
      this.setState({
        cart: [...this.state.cart, { pid, qty }],
      });
    },
    // ORDERS
    updateOrder: (newOrder, id) => {
      this.setState({
        orders: this.state.orders.map((o) => {
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
          <Route
            path={[
              "/",
              "/signup",
              "/login",
              "/dashboard",
              "/addsite",
              "/editorder",
              "/editproduct",
              "/product",
            ]}
            component={Header}
          />
          <Route path="/s/:subdomain" component={SiteHeader} />
          <main className="main">
            {/*eCannaB Public Routes*/}
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/*Private routes for eCannaB user= Seller*/}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addsite" component={CreateSite} />
            <Route path="/addresource" component={AddResource} />
            <Route path="/addproduct" component={CreateProduct} />
            <Route path="/editorder/:id" component={EditOrder} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/product/:id" component={Product} />
            {/*Seller Public Site Routes*/}
            <Route path="/s/:subdomain/" component={SiteProductList} />
            <Route path="/s/:subdomain/signup" component={SiteSignup} />
            <Route path="/s/:subdomain/login" component={SiteLogin} />
            <Route path="/s/:subdomain/product/:id" component={SiteProduct} />
            <Route path="/s/:subdomain/resources" component={SiteProductList} />
            {/*Private routes for seller's customer*/}
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
