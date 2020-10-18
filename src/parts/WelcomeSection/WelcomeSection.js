import React from "react";
import CompanyName from "../../components/CompanyName";
import WelcomeMenu from "../../components/WelcomeMenu";
import Headline from "../../components/Headline/Headline";
import DetailsButton from "../../components/DetailsButton";
import "./WelcomeSection.css";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome-page">
        <CompanyName />
        <WelcomeMenu />
        <Headline />
        <DetailsButton />
      </div>
    );
  }
}

export default WelcomePage;
