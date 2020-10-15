import React from "react";
import "./ShowcaseNavbar.css";

class ShowcaseNavbar extends React.Component {
  render() {
    return (
        <ul className="showcase-navbar">
            <li className="showcase-navbar-item">Fashion</li>
            <li className="showcase-navbar-item">Furnitures</li>
            <li className="showcase-navbar-item" id="active">Watches</li>
            <li className="showcase-navbar-item">Mobile</li>
            <li className="showcase-navbar-item">Clothes</li>
            <li className="showcase-navbar-item">Toys</li>
        </ul>
    )
  }
}

export default ShowcaseNavbar;