import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <ProductList />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
