import React from "react";
import ReactDOM from "react-dom";
import DeleteResource from "./DeleteResource";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <DeleteResource />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
