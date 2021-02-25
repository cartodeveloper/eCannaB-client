import React from "react";
import ReactDOM from "react-dom";
import EditProduct from "./EditProduct";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <EditProduct />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
