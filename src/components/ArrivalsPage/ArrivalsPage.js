import React from "react";
import ArrivalsHeader from "./../ArrivalsHeader/ArrivalsHeader";
import ArrivalsItems from "./../ArrivalsItems/ArrivalsItems";
import "./ArrivalsPage.css";

function ArrivalsPage(props) {
  
    return (
      <div className="arrivals-page">
        <ArrivalsHeader />
        <ArrivalsItems bags={props.bags} />
      </div>
    );

}

export default ArrivalsPage;
