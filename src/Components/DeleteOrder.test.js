import React from "react";
import ReactDOM from "react-dom";
import DeleteOrder from "./DeleteOrder";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <DeleteOrder />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
