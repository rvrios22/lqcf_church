import React from "react";
import '../css/what-we-believe.css';
import { statementOfFaith } from "../mappingData";

export default function WhatWeBelieve() {
  return (
    <div className="general-container">
      <h1 className="header">What We Believe</h1>
      {statementOfFaith.map((statement) => (
        <div className="statement-container">
          <h2 className="sub-header">{statement.title}</h2>
          <p className="general-text">{statement.statement}</p>
          <hr className="statement-spacer"/>
        </div>
      ))}
    </div>
  );
}
