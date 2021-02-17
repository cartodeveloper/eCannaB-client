import React from "react";
import ReactDOM from "react-dom";
import SiteProduct from "./SiteProduct";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SiteProduct />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
