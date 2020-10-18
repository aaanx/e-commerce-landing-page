import React from "react";
import "./App.css";
import WelcomeSection from "./parts/WelcomeSection/WelcomeSection";
import ArrivalsSection from "./parts/ArrivalsSection/ArrivalsSection";
import BrandsSection from "./parts/BrandsSection/BrandsSection";
import ShowcaseSection from "./parts/ShowcaseSection/ShowcaseSection";
import NewsletterSection from "./parts/NewsletterSection/NewsletterSection";
import FooterSection from "./parts/FooterSection/FooterSection";

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
      <WelcomeSection />
      <ArrivalsSection bags={this.state.products.bags} />
      <BrandsSection />
      <ShowcaseSection watches={this.state.products.watches} />
      <NewsletterSection />
      <FooterSection />
    </div>
  );  
}

}

export default App;
