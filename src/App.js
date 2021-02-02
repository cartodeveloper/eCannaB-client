import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Singup";
import Dashboard from "./Components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" component={Header} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <main className="main"></main>
      </div>
    );
  }
}

export default App;
