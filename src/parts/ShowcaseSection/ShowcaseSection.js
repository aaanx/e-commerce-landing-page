import React from "react";
import SectionHeader from "../../components/SectionHeader";
import ProductCategoriesMenu from "../../components/ProductCategoriesMenu/ProductCategoriesMenu";
import ProductsDisplay from "../../components/ProductsDisplay/ProductsDisplay";
import "./ShowcaseSection.css";

function ShowcasePage(props) {
    return (
        <div className="showcase-page">
            <SectionHeader name="Our Showcase"/>
            <ProductCategoriesMenu/>
            <ProductsDisplay products={props.watches}/>
        </div>
    )
}

export default ShowcasePage;
