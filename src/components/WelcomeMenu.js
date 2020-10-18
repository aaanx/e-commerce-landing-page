import React from "react";
import SearchIcon from "../images/icons/search.svg";
import ArrowDownIcon from "../images/icons/arrow_down.svg";

class WelcomeMenu extends React.Component {
  render() {

    const MenuStyles = {
      float: "right",
      margin: "0",
      width: "371px",
      height: "65px",
      border: "none",
      outline: "none",
      borderRadius: "32px",
      filter: "drop-shadow(-1.294px 4.83px 12.5px rgba(189, 227, 239, 0.75))",
      backgroundColor: "#fff",
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      position: "absolute",
      top: "73px",
      right: "220px"
    }

    const MenuButtonStyles = {
      border: "none",
      backgroundColor: "transparent",
      borderRadius: "inherit",
      width: "50%",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "600",
      fontFamily: "'Open Sans', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    const MenuButtonTextStyles = {
      margin: "0 30px"
    }

    return (
      <div className="menu" style={MenuStyles}>
        <button className="menu-search-btn" style={MenuButtonStyles}>
          <img src={SearchIcon} />
          <span className="menu-btn-text" style={MenuButtonTextStyles}>Search</span>
        </button>
        <button className="menu-collection-btn" style={MenuButtonStyles}>
          <span className="menu-btn-text">Collection</span>
          <img src={ArrowDownIcon} />
        </button>
      </div>
    );
  }
}

export default WelcomeMenu;
