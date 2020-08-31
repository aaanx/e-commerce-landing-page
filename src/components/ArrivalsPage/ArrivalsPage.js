import React from "react";
import ArrivalsHeader from "./../ArrivalsHeader/ArrivalsHeader";
import ArrivalsItems from "./../ArrivalsItems/ArrivalsItems";
import AddToCartButton from "./../AddToCartButton/AddToCartButton";
import "./ArrivalsPage.css";

class ArrivalsPage extends React.Component {
  render() {
    return (
      <div className="arrivals-page">
        <ArrivalsHeader />
        <ArrivalsItems />
        <AddToCartButton />
      </div>
    );
  }
}

export default ArrivalsPage;
