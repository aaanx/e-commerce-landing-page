import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ArrivalsPage from "./components/ArrivalsPage/ArrivalsPage";
import BrandsPage from "./components/BrandsPage/BrandsPage";
import ShowcasePage from "./components/ShowcasePage/ShowcasePage";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection";
import FooterSection from "./components/FooterSection/FooterSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      products: {
        bags: [],
        watches: [],
      },
    };
  }

  componentDidMount() {
    var data = require("./products.json");
    this.setState({
      isLoaded: true,
      products: {
        bags: data.bags,
        watches: data.watches,
      },
    });
  }

  componentDidUpdate() {
    console.log(this.state.products.bags);
    console.log(this.state.products.watches);
  }

render(){
  return (
    <div className="page-wrapper">
      <WelcomePage />
      <ArrivalsPage bags={this.state.products.bags} />
      <BrandsPage />
      <ShowcasePage watches={this.state.products.watches} />
      <NewsletterSection />
      <FooterSection />
    </div>
  );  
}

}

export default App;
