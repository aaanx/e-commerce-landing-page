import React, { useState } from "react";
import "./ArrivalsItem.css";
import FavoriteBorderIcon from "../../images/icons/favorite_border.svg";
import MessageIcon from "../../images/icons/message.svg";

function ArrivalsItem(props) {
  const [iconsDisplay, setIconsDisplay] = useState("none");
  const [addBtnDisplay, setAddBtnDisplay] = useState("none");
  const [nameFontColor, setNameFontColor] = useState("#777");
  const [priceFontColor, setPriceFontColor] = useState("#333");

  function handleArrivalItemMouseEnter() {
    setIconsDisplay("flex");
    setAddBtnDisplay("block");
    setNameFontColor("#333");
    setPriceFontColor("#8c84f9");
  }

  function handleArrivalItemMouseLeave() {
    setIconsDisplay("none");
    setAddBtnDisplay("none");
    setNameFontColor("#777");
    setPriceFontColor("#333");
  }

  return (
    <div
      className="arrivals-item"
      onMouseEnter={handleArrivalItemMouseEnter}
      onMouseLeave={handleArrivalItemMouseLeave}
    >
      <div className="arrivals-item-icons" style={{ display: iconsDisplay }}>
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
      <p className="arrivals-item-name" style={{ color: nameFontColor }}>
        {props.name}{" "}
      </p>
      <p className="arrivals-item-price" style={{ color: priceFontColor }}>
        {props.price}{" "}
      </p>
      <button className="add-btn" style={{ display: addBtnDisplay }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ArrivalsItem;
