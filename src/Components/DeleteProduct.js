import React, { Component } from "react";
import Context from "../Context";
import config from "../config";
import tokenService from "../services/token-service";

export default class DeleteButton extends Component {
  static contextType = Context;

  handleDelete = (e) => {
    e.preventDefault();
    const id = this.props.id;
    console.log(id);
    fetch(`${config.API_BASE_URL}/products/${id}`, {
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
        this.context.deleteProduct(id);
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
            if (window.confirm("Are you sure you wish to delete this product?"))
              this.handleDelete(e);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
