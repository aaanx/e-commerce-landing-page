import React from "react";
import "./ArrivalsItem.css";

function ArrivalsItem(props) {
  return (
    <div className="arrivals-item">
      <img src={props.img} className="arrivals-item-img" />
      <p className="arrivals-item-name">{props.name} </p>
      <p className="arrivals-item-price">{props.price} </p>
    </div>
  );
}

export default ArrivalsItem;
