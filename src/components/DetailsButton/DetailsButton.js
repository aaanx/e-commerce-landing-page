import React from "react";
import "./DetailsButton.css";
import ArrowRightIcon from "../../images/icons/arrow_right.svg";

class DetailsButton extends React.Component {
  render() {
    return (
      <button className="details-button">
        <span>Details</span>
        <img src={ArrowRightIcon} />
      </button>
    );
  }
}

export default DetailsButton;
