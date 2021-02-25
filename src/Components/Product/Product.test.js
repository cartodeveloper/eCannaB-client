import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Product />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
