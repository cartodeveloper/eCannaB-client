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
import Cart from "./Components/Cart";
import SiteHome from "./Components/SiteHome";
import tokenService from "./services/token-service";
import config from "./config";
import EditSite from "./Components/EditSite";

class App extends Component {
  state = {
    //customers: [],
    orders: data.ORDERS,
    products: [],
    resources: [],
    cart: [],
    sites: [],
    error: null,

    // SITES
    setSites: (sites) => {
      this.setState({
        sites,
        error: null,
      });
    },
    getSites: () => {
      fetch(`${config.API_BASE_URL}/s`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${tokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(this.state.setSites)
        .catch((error) => this.setState({ error }));
    },
    addSite: (newSite) => {
      this.setState({
        sites: [...this.state.sites, newSite],
      });
    },
    updateSite: (newSite, id) => {
      this.setState({
        sites: this.state.sites.map((s) => {
          if (s.id === id) {
            return newSite;
          }
          return s;
        }),
      });
    },
    deleteSite: (id) => {
      this.setState({
        sites: this.state.sites.filter((s) => s.id !== id),
      });
    },
    // SITE RESOURCES
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
    setProducts: (products) => {
      this.setState({
        products,
        error: null,
      });
    },
    getProducts: () => {
      fetch(`${config.API_BASE_URL}/products`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${tokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(this.state.setProducts)
        .catch((error) => this.setState({ error }));
    },
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
    addToCart: (pid, p_title, price) => {
      this.setState({
        cart: [...this.state.cart, { pid, p_title, price }],
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
    setResources: (resources) => {
      this.setState({
        resources,
        error: null,
      });
    },
    getResources: () => {
      fetch(`${config.API_BASE_URL}/resources`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${tokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then(this.state.setResources)
        .catch((error) => this.setState({ error }));
    },
    addResource: (newResource) => {
      this.setState({
        resources: [...this.state.resources, newResource],
      });
    },

    //Logout User
    logout: () => {
      return this.setState({ sites: [] });
    },
    //Logout Customer
    logoutCustomer: () => {
      return this.setState({ cart: [] });
    },
  };

  // eCannaB User access
  componentDidMount() {
    setTimeout(() => {
      if (tokenService.hasAuthToken()) {
        this.state.getSites();
        this.state.getResources();
        this.state.getProducts();
      }
    }, 1000);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <Route
            exact
            path={[
              "/",
              "/signup",
              "/login",
              "/dashboard",
              "/addsite",
              "/editsite/:id",
              "/editorder",
              "/editproduct",
              "/addproduct",
              "/addresource",
              "/product/:id",
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
            <Route path="/editsite/:id" component={EditSite} />
            <Route path="/addresource" component={AddResource} />
            <Route path="/addproduct" component={CreateProduct} />
            <Route path="/editorder/:id" component={EditOrder} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/product/:id" component={Product} />
            {/*Seller Public Site Routes*/}
            <Route path="/s/:subdomain/" component={SiteHome} />
            <Route exact path="/s/:subdomain/signup" component={SiteSignup} />
            <Route path="/s/:subdomain/login" component={SiteLogin} />
            <Route path="/s/:subdomain/product/:id" component={SiteProduct} />
            {/*Private routes for seller's customer = JUST the cart and checkout*/}
            <Route path="/s/:subdomain/cart" component={Cart} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
