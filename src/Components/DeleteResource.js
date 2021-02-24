import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenService from "../services/token-service";

export default class DeleteResource extends Component {
  static contextType = Context;

  handleDelete = (e) => {
    e.preventDefault();
    const id = this.props.id;
    fetch(`${config.API_BASE_URL}/resources/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
      })
      .then((res) => {
        this.context.deleteResource(id);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="DeleteBtn">
        <button
          onClick={(e) => {
            if (
              window.confirm("Are you sure you wish to delete this resource?")
            )
              this.handleDelete(e);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
