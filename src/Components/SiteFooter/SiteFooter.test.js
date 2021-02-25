import React from "react";
import ReactDOM from "react-dom";
import SiteFooter from "./SiteFooter";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SiteFooter />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
