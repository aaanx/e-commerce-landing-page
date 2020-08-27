import React from "react";
import CompanyName from "../CompanyName/CompanyName";
import Menu from "../Menu/Menu";
import Headline from "../Headline/Headline";
import DetailsButton from "../DetailsButton/DetailsButton";
import "./WelcomePage.css";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <CompanyName />
        <Menu />
        <Headline />
        <DetailsButton />
      </div>
    );
  }
}

export default WelcomePage;
