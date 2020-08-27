import React from "react";
import "./Headline.css";

class Headline extends React.Component {
  render() {
    return (
      <div className="headline">
        <p className="main-headline">
          Summer <span className="white-text">Collection</span>
        </p>
        <p className="promo-headline">
          25% <span className="white-text">off</span>
        </p>
      </div>
    );
  }
}

export default Headline;
