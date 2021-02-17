import React from "react";
import ReactDOM from "react-dom";
import DeleteSite from "./DeleteSite";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <DeleteSite />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
