import React from "react";
import "./BrandsPage.css";
import IphoneImage from "../../images/iphone.png";

class BrandsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="brands-page">
        <div className="brands-info-container">
          <h3 className="brands-header">Our Brands</h3>
          <div className="brands-info">
            <p className="brands-info-header">
              Small Shoes 2017 new Arrivals mini Messenger{" "}
              <span style={{ color: "#8c84f9" }}>Classic Shoes</span>
            </p>
            <p className="brands-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor facilisis tristique. Etiam nulla elit, semper at elit
              tempor, mattis auctor metus. Ut auctor purus id nibh ornare, eu
              rhoncus lacus gravida. Nunc bibendum sollicitudin massa,
              ullamcorper congue metus molestie quis. Mauris eu sapien sed nibh
              porttitor congue. Integer finibus tortor libero, sed gravida
              tortor tincidunt eget.
            </p>
          </div>
        </div>
        <div className="brands-img-container">
          <img
            src={IphoneImage}
            alt="classic-shoes-iphone"
            className="iphone-img"
          />
        </div>
      </div>
    );
  }
}

export default BrandsPage;
