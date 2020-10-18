import React, { useState, useEffect } from "react";
import "./ProductsDisplay.css";
import FavoriteBorderIcon from "../../images/icons/favorite_border.svg";
import MessageIcon from "../../images/icons/message.svg";

function ProductsDisplay(props) {
  useEffect(() => {
    if (props.products.length != 0) {
      console.log(props.products);
    }
  }, [props]);

  return (
    <div className="products-display-container">
      {props.products.slice(0, 6).map((product, i) => (
        <Product
          key={i}
          name={product.name}
          price={product.price}
          img={product.image}
        />
      ))}
    </div>
  );
}

function Product(props) {
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
      className="product-container"
      onMouseEnter={handleArrivalItemMouseEnter}
      onMouseLeave={handleArrivalItemMouseLeave}
    >
      <div className="product-icons" style={{ display: iconsDisplay }}>
        <span className="product-favorite">
          <img
            src={FavoriteBorderIcon}
            className="product-favorite-icon"
          />
          <span className="product-favorite-num">253</span>
        </span>
        <span className="product-message">
          <img src={MessageIcon} className="product-message-icon" />
          <span className="product-message-num">120</span>
        </span>
      </div>
      <div className="product-img-container">
        <img src={props.img} className="product-img" />
      </div>
      
      <p className="product-name" style={{ color: nameFontColor }}>
        {props.name}
      </p>
      <p className="product-price" style={{ color: priceFontColor }}>
        {props.price}
      </p>
      <button className="product-add-btn" style={{ display: addBtnDisplay }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductsDisplay;
