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
        position: "absolute",
        top: "80px",
        left: "216px"
    }

    return <h1 className="company-name" style={CompanyNameStyles}>Big Shop</h1>;
  }
}

export default CompanyName;
