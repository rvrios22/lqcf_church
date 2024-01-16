import React from "react";
import { studying } from '../../mappingData'
import "./studyMap.css";
function StudyMap() {
  return (
    <div className="general-container">
      <h1 className="header">What We Are Studying</h1>
      {studying.map((study, idx) => (
        <div className="study-container" key={idx}>
          <h2 className="study-header">{study.title}</h2>
          <p className="study-text">{study.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default StudyMap;
