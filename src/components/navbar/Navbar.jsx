import React, { useRef, useState } from "react";

import "../../css/navbar.css";

import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";

import WhoWeAre from "../whoWeAre/WhoWeAre";
import Ministry from "../ministry/Ministry";

import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

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
  //last edit: removed the Ministry component from the container
  return (
    <>
      <MobileNavbar />
      <div className="navbar-container">
        <div>
          <Link to="/">LQCF Church</Link>
        </div>
        <div ref={dropDownRef}>
          {navbarData.map((data) => (
            <Link to={data.link}>
              <span className="navbar-list" key={data.name}>
                {data.name}
              </span>
            </Link>
          ))}
          <span
            className="navbar-list"
            onMouseOver={() => setWhoWeAreDropDownOpen(true)}
          >
            Who We Are
          </span>
          {isWhoWeAreDropDownOpen && <WhoWeAre />}
          <span
            className="navbar-list"
            onMouseOver={() => setMinistryDropDownOpen(true)}
          >
            Ministry
          </span>
        </div>
      </div>
      {isMinistryDropDownOpen && <Ministry />}
    </>
  );
}
