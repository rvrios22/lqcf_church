import React from "react";
import { ministry } from "../navbar/navbarData";
import { Link } from "react-router-dom";

function Ministry() {
  return (
    <div className="drop-down-container ministry">
      {ministry.map((ministry) => (
        <Link key={ministry.name} to={ministry.link}>
          <div className="drop-down-item" key={ministry.name}>{ministry.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Ministry;
