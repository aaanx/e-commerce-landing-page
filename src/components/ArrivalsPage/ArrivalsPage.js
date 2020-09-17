import React from "react";
import ArrivalsHeader from "./../ArrivalsHeader/ArrivalsHeader";
import ArrivalsItems from "./../ArrivalsItems/ArrivalsItems";
import "./ArrivalsPage.css";

class ArrivalsPage extends React.Component {
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
    var data = require("../../products.json");
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
  }

  render() {
    return (
      <div className="arrivals-page">
        <ArrivalsHeader />
        <ArrivalsItems bags={this.state.products.bags} />
      </div>
    );
  }
}

export default ArrivalsPage;
