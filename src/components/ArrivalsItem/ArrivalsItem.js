import React from "react";
import "./ArrivalsItem.css";
import FavoriteBorderIcon from "../../images/icons/favorite_border.svg";
import MessageIcon from "../../images/icons/message.svg";

function ArrivalsItem(props) {
  return (
    <div className="arrivals-item">
      <div className="arrivals-item-icons">
        <span className="arrivals-item-favorite">
          <img
            src={FavoriteBorderIcon}
            className="arrivals-item-favorite-icon"
          />
          <span className="arrivals-item-favorite-num">253</span>
        </span>
        <span className="arrivals-item-message">
          <img src={MessageIcon} className="arrivals-item-message-icon" />
          <span className="arrivals-item-message-num">120</span>
        </span>
      </div>
      <img src={props.img} className="arrivals-item-img" />
      <p className="arrivals-item-name">{props.name} </p>
      <p className="arrivals-item-price">{props.price} </p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default ArrivalsItem;
