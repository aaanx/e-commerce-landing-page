import React from "react";
import ShowcaseHeader from "../ShowcaseHeader/ShowcaseHeader";
import ShowcaseNavbar from "../ShowcaseNavbar/ShowcaseNavbar";
import ShowcaseItems from "../ShowcaseItems/ShowcaseItems";
import "./ShowcasePage.css";

function ShowcasePage(props) {
    return (
        <div className="showcase-page">
            <ShowcaseHeader/>
            <ShowcaseNavbar/>
            <ShowcaseItems watches={props.watches}/>
        </div>
    )
}

export default ShowcasePage;
