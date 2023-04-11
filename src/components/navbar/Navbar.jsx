import React, { useRef, useState} from "react";

import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";

import WhoWeAre from "../whoWeAre/WhoWeAre";
import Ministry from "../ministry/Ministry";

import { useOnHoverOutside } from '../../hooks/useOnHoverOutside';

export default function Navbar() {
  const dropDownRef = useRef(null);
  const [isMinistryDropDownOpen, setMinistryDropDownOpen] = useState(false);

  const closeHoverMinistry = () => {
    setMinistryDropDownOpen(false);
  };

  useOnHoverOutside(dropDownRef, closeHoverMinistry);

  return (
    <div>
      <Link to="/">LQCF Church</Link>
      {navbarData.map((data) => (
        <ul>
          <Link to={data.link}>
            <li key={data.name}>{data.name}</li>
          </Link>
        </ul>
      ))}
      <WhoWeAre />
      <h3 onMouseOver={() => setMinistryDropDownOpen(true)}>Ministry</h3>
      {isMinistryDropDownOpen && <Ministry />}
      
    </div>
  );
}
