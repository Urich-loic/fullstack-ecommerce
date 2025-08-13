import React from "react";

export default class AppUrl {
  static BaseURL = "http://127.0.0.1:8000/api/";
  static getProduct(id) {
    return this.BaseURL + `product/${id}`;
  }
}
