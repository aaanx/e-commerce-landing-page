import React from "react";
import ArrivalsItem from "./../ArrivalsItem/ArrivalsItem";
import "./ArrivalsItems.css";

var data = require("../../products.json");
console.log(data);

class ArrivalsItems extends React.Component {
  render() {
    return (
      <div className="arrivals-items">
        <ArrivalsItem id="1" />
        <ArrivalsItem id="2" />
        <ArrivalsItem id="3" />
        <ArrivalsItem id="4" />
        <ArrivalsItem id="5" />
        <ArrivalsItem id="6" />
      </div>
    );
  }
}

export default ArrivalsItems;
