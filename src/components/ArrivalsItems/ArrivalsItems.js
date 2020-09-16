import React, { useState, useEffect } from "react";
import ArrivalsItem from "./../ArrivalsItem/ArrivalsItem";
import "./ArrivalsItems.css";

function ArrivalsItems(props) {
  useEffect(() => {
    if (props.bags.length != 0) {
      console.log(props.bags);
    }
  }, [props]);

  return (
    <div className="arrivals-items">
      {props.bags.map((bag, i) => (
        <ArrivalsItem
          key={i}
          name={bag.name}
          price={bag.price}
          img={bag.image}
        />
      ))}
    </div>
  );
}

export default ArrivalsItems;
