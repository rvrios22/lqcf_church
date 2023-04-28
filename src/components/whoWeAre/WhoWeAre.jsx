import React from "react";

import { whoWeAre } from "../navbar/navbarData";
import { Link } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <div className="drop-down-container who-we-are">
      {whoWeAre.map((data) => (
        <Link key={data.name} to={data.link}>
          <div key={data.name}>{data.name}</div>
        </Link>
      ))}
    </div>
  );
}
