import React from "react";
import ReactDOM from "react-dom";
import EditResource from "./EditResource";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <EditResource />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
