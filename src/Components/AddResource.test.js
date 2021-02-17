import React from "react";
import ReactDOM from "react-dom";
import AddResource from "./AddResource";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <AddResource />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
