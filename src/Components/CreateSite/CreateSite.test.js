import React from "react";
import ReactDOM from "react-dom";
import CreateSite from "./CreateSite";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <CreateSite />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
