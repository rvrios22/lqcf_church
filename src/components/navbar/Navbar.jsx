import React from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";


export default function Navbar() {
  return (
    <div>
      <Link to='/'>
        LQCF Church
      </Link>
      {navbarData.map((data) => (
        <Link to={data.link}>
          <ul>
            <li key={data.name}>{data.name}</li>
          </ul>
        </Link>
      ))}
    </div>
  );
}
