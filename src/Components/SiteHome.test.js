import React from "react";
import ReactDOM from "react-dom";
import SiteHome from "./SiteHome";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SiteHome />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
