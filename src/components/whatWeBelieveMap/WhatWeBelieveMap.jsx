import React from "react";
import { statementOfFaith } from "../../mappingData";
import "./whatWeBelieveMap.css";
function WhatWeBelieveMap() {
  return (
    <div className="general-container">
      <h1 className="header">What We Believe</h1>
      {statementOfFaith.map((statement) => (
        <div className="statement-container">
          <h2 className="sub-header">{statement.title}</h2>
          <p className="general-text">{statement.statement}</p>
          <hr className="statement-spacer" />
        </div>
      ))}
    </div>
  );
}

export default WhatWeBelieveMap;
