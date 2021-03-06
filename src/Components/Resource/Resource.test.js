import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Resource from "./Resource";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Resource />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
