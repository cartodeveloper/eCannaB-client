import React from "react";
import ReactDOM from "react-dom";
import CreateProduct from "./CreateProduct";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <CreateProduct />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
