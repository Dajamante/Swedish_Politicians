import React from "react";
import "./DataPlaceholder.scss";

const DataPlaceholder = ({ children }) => {
  return (
    <>
      <div className="homeMainWindowTopLine" />
      <div className="homeMainWindow">{children}</div>
    </>
  );
};

export default DataPlaceholder;
