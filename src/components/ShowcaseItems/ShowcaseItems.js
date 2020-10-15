import React, { useEffect } from "react";
import ShowcaseItem from "./../ShowcaseItem/ShowcaseItem";
import "./ShowcaseItems.css";

function ShowcaseItems(props) {
  useEffect(() => {
    if (props.watches.length != 0) {
      console.log(props.watches);
    }
  }, [props]);

    return (
        <div className="showcase-items">
        {props.watches.slice(0, 6).map((watch, i) => (
          <ShowcaseItem
            key={i}
            name={watch.name}
            price={watch.price}
            img={watch.image}
          />
        ))}
      </div>
    );
}

export default ShowcaseItems;