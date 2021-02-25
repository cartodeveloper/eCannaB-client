import React from "react";
import ReactDOM from "react-dom";
import Signup from "./Signup";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Signup />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
