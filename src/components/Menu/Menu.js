import React from "react";
import SearchIcon from "../../images/icons/search.svg";
import ArrowDownIcon from "../../images/icons/arrow_down.svg";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <button>
          <img src={SearchIcon} />
          <span>Search</span>
        </button>
        <button>
          <span>Collection</span>
          <img src={ArrowDownIcon} />
        </button>
      </div>
    );
  }
}

export default Menu;
