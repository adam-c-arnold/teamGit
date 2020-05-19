import React, { Component } from "react";
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
const key = "rBwmSuajR0IKLPeX9zyS8oEN6vbWNgk29wIw4f8l";
const url = `https://api.nasa.gov/planetary/earth/imagery?lon=-85.969&lat=39.8685&date=${today}&api_key=${key}`;

console.log(url);

export default class Nasa extends Component {
  render() {
    return (
      <div>
        <h3>Nasa component</h3>
      </div>
    );
  }
}
