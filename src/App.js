import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Singup";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import ProductList from "./Components/Product";
import data from "./data";
import Context from "./Context";

class App extends Component {
  state = {
    orders: data.ORDERS,
    products: data.PRODUCTS,
    sites: data.SITES,
    error: null,
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <Route path="/" component={Header} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <main className="main">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/product" component={Product} />
            <Route path="/products" component={ProductList} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
