import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./SiteHeader";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SiteHeader />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
