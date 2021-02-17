import React from "react";
import ReactDOM from "react-dom";
import Orders from "./Orders";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Orders />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
