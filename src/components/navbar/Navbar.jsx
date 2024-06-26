import React, { useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";
import WhoWeAre from "../whoWeAre/WhoWeAre";
import Ministry from "../ministry/Ministry";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";

export default function Navbar({ userIsLoggedIn, userEmail, handleSignout }) {
  const [isMinistryDropDownOpen, setMinistryDropDownOpen] = useState(false);
  const [isWhoWeAreDropDownOpen, setWhoWeAreDropDownOpen] = useState(false);
  const ministryRef = useRef(null);
  const whoWeAreRef = useRef(null);

  const closeHoverWhoWeAre = () => {
    setWhoWeAreDropDownOpen(false);
  };

  const closeHoverMinistry = () => {
    setMinistryDropDownOpen(false);
  };

  useOnHoverOutside(ministryRef, closeHoverMinistry);
  useOnHoverOutside(whoWeAreRef, closeHoverWhoWeAre);

  return (
    <div className="navbar-container">
      <div className="navbar-flex-container">
        <div>
          <Link to="/">LQCF Church</Link>
          <div className="navbar-user-container">
            {userIsLoggedIn && <span>Welcome, {userEmail}</span>}
            {userIsLoggedIn && (
              <span className="logout" onClick={handleSignout}>
                Logout
              </span>
            )}
          </div>
        </div>
        <div>
          <div ref={whoWeAreRef} className="drop-down-ref">
            {isWhoWeAreDropDownOpen && <WhoWeAre />}
            <span
              className="navbar-list"
              onMouseOver={() => setWhoWeAreDropDownOpen(true)}
            >
              Who We Are
            </span>
          </div>
          <div ref={ministryRef} className="drop-down-ref">
            <span
              className="navbar-list"
              onMouseOver={() => setMinistryDropDownOpen(true)}
            >
              Ministry
            </span>
            {isMinistryDropDownOpen && <Ministry />}
          </div>
          {navbarData.map((data) => (
            <Link key={data.name} to={data.link}>
              <span className="navbar-list" key={data.name}>
                {data.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
