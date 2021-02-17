import React from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Cart />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
