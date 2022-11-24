import React from "react";

// Container around the forms 

const ShadowContainer: React.FC = ({children}) => {
  const shadowContainer = {
    boxShadow: "3px 3px 16px 3px rgba(0,0,0,0.21)",
    border: "1px solid #E7E7E7",
    width: "23rem",
    height: "40rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto"
}
  return <div style={shadowContainer as React.CSSProperties}>{children}</div>;
};

export default ShadowContainer;
