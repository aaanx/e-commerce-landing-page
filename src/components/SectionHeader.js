import React from "react";

class SectionHeader extends React.Component {

  render() {
    const SectionHeaderStyle = {
      fontSize: "50px",
      letterSpacing: "1px",
      lineHeight: "26px",
      color: "#333",
      fontWeight: "700",
      fontFamily: "Open Sans",
      textAlign: "center",
      padding: "80px 0"
    }

    return <h3 className="section-header" style={SectionHeaderStyle}>{this.props.name}</h3>;
  }
}

export default SectionHeader;