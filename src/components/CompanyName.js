import React from "react";

class CompanyName extends React.Component {
  render() {

    const CompanyNameStyles = {
        display: "block",
        margin: "0",
        padding: "0",
        fontSize: "40px",
        lineHeight: "120px",
        color: "#fff",
        fontWeight: "500",
        fontFamily: "Roboto",
        float: "left",
        cursor: "pointer",
        position: "absolute",
        top: "43px",
        left: "220px"
    }

    //  color: #fbf934;

    return <h1 className="company-name" style={CompanyNameStyles}>Big Shop</h1>;
  }
}

export default CompanyName;
