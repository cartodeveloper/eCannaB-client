import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Singup";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import ProductList from "./Components/Product";
import LandingPage from "./Components/LandingPage";
import CreateSite from "./Components/CreateSite";
import CreateProduct from "./Components/CreateProduct";
import EditProduct from "./Components/EditProduct";
import EditOrder from "./Components/EditOrder";
import data from "./data";
import Context from "./Context";
import LandingSite from "./Components/LandingSite";
import HeaderSite from "./Components/HeaderSite";

class App extends Component {
  state = {
    orders: data.ORDERS,
    products: data.PRODUCTS,
    resources: data.RESOURCES,
    sites: data.SITES,
    error: null,

    // SITES
    addSite: (newSite) => {
      this.setState({
        sites: [...this.state.sites, newSite],
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
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <Route exact path="/" component={Header} />
          <Route exact path="/subdomain" component={HeaderSite} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <main className="main">
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addsite" component={CreateSite} />
            <Route path="/addproduct" component={CreateProduct} />
            <Route path="/editorder/:id" component={EditOrder} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/product/:id" component={Product} />
            <Route path="/products" component={ProductList} />
            <Route exact path="/landingsite" component={LandingSite} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
