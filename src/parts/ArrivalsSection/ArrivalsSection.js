import React from "react";
import SectionHeader from "../../components/SectionHeader";
import ProductsDisplay from "../../components/ProductsDisplay/ProductsDisplay";
import "./ArrivalsSection.css";

function ArrivalsPage(props) {
  
    return (
      <div className="arrivals-page">
        <SectionHeader name="Trendy Arrivals" />
        <ProductsDisplay products={props.bags} />
      </div>
    );

}

export default ArrivalsPage;
