import React from "react";
import ReactDOM from "react-dom";
import EditSite from "./EditSite";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <EditSite />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
