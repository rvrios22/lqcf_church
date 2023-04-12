import React from "react";
import { ministry } from "../navbar/navbarData";
import { Link } from "react-router-dom";

function Ministry() {
  return (
    <div className="drop-down-container">
      {ministry.map((ministry) => (
        <Link to={ministry.link}>
          <div key={ministry.name}>{ministry.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Ministry;
