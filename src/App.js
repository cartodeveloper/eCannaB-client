import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" component={Header} />
        <main className="main"></main>
      </div>
    );
  }
}

export default App;
