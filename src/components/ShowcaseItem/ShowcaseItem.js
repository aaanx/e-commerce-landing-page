import React, { useState } from "react";
import "./ShowcaseItem.css";

function ShowcaseItem(props) {

  return (
    <div
    className="showcase-item"
  >
    <div className="showcase-item-img-container">
      <img src={props.img} className="showcase-item-img" />
    </div>
    <p className="showcase-item-name">
      {props.name}
    </p>
    <p className="showcase-item-price">
      {props.price}
    </p>
  </div>
  );
}

export default ShowcaseItem;
