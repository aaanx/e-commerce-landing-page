import React from "react";
import ArrowRightIcon from "../images/icons/arrow_right.svg";

class DetailsButton extends React.Component {
  render() {

    const DetailsButtonStyles = {
        width: "202px",
        height: "60px",
        border: "none",
        outline: "none",
        borderRadius: "30px",
        filter: "drop-shadow(-1.294px 4.83px 12.5px rgba(189, 227, 239, 0.75))",
        backgroundColor: "#fcfcfc",
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: "600",
        fontFamily: "Open Sans",
        position: "absolute",
        top: "730px",
        right: "560px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    }

    const DetailsButtonTextStyles = {
      marginRight: "10px"
    }

    return (
      <button className="details-button" style={DetailsButtonStyles}>
        <span className="details-button-text" style={DetailsButtonTextStyles}>Details</span>
        <img src={ArrowRightIcon} />
      </button>
    );
  }
}

export default DetailsButton;
