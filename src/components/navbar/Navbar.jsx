import React, { useRef, useState} from "react";

import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";

import WhoWeAre from "../whoWeAre/WhoWeAre";
import Ministry from "../ministry/Ministry";

import { useOnHoverOutside } from '../../hooks/useOnHoverOutside';

export default function Navbar() {
  const dropDownRef = useRef(null);
  const [isMinistryDropDownOpen, setMinistryDropDownOpen] = useState(false);
  const [isWhoWeAreDropDownOpen, setWhoWeAreDropDownOpen] = useState(false);

  const closeHoverWhoWeAre = () => {
    setWhoWeAreDropDownOpen(false);
  };

  const closeHoverMinistry = () => {
    setMinistryDropDownOpen(false);
  };

  useOnHoverOutside(dropDownRef, closeHoverMinistry);
  useOnHoverOutside(dropDownRef, closeHoverWhoWeAre);
  
  return (
    <div ref={dropDownRef}>
      <Link to="/">LQCF Church</Link>
      {navbarData.map((data) => (
        <ul>
          <Link to={data.link}>
            <li key={data.name}>{data.name}</li>
          </Link>
        </ul>
      ))}
      <h4 onMouseOver={() => setWhoWeAreDropDownOpen(true)}>Who We Are</h4>
      {isWhoWeAreDropDownOpen && <WhoWeAre />}
      <h4 onMouseOver={() => setMinistryDropDownOpen(true)}>Ministry</h4>
      {isMinistryDropDownOpen && <Ministry />}
    </div>
  );
}
