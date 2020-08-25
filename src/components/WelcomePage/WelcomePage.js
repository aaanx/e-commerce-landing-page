import React from "react";
import CompanyName from "../CompanyName/CompanyName";
import Menu from "../Menu/Menu";
import Headline from "../Headline/Headline";
import "./WelcomePage.css";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="WelcomePage">
        <CompanyName />
        <Menu />
        <Headline />
        <button>Details</button>
      </div>
    );
  }
}

export default WelcomePage;
