import React from "react";
import ReactDOM from "react-dom";
import DeleteProduct from "./DeleteProduct";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <DeleteProduct />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
