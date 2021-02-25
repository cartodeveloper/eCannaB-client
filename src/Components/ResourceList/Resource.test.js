import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ResourceList from "./ResourcesList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <ResourceList />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
