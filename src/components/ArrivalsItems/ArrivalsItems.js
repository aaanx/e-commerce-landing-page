import React, { useState, useEffect } from "react";
import ArrivalsItem from "./../ArrivalsItem/ArrivalsItem";
import "./ArrivalsItems.css";

function ArrivalsItems(props) {
  useEffect(() => {
    if (props.bags.length != 0) {
      console.log(props.bags);
    }
  }, [props]);

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

export default ArrivalsItems;
