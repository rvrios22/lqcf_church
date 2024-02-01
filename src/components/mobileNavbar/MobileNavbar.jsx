import React, { useEffect, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import "./mobile-navbar.css";
import { ministry, navbarData, whoWeAre } from "../navbar/navbarData";
import { Link, useLocation } from "react-router-dom";

export default function MobileNavbar({
  userIsLoggedIn,
  userEmail,
  handleSignout,
}) {
  const [mobileBarIsOpen, setMobileBarIsOpen] = useState(false);
  const [ministryIsOpen, setMinistryIsOpen] = useState(false);
  const [whoWeAreIsOpen, setWhoWeAreIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileBarIsOpen(false);
    setMinistryIsOpen(false);
    setWhoWeAreIsOpen(false);
  }, [location]);

  return (
    <div className="mobile-navbar-container">
      <div className="mobile-navbar-header">
        {userIsLoggedIn && <p className="general-text">Welcome, {userEmail}</p>}
        <div
          className="mobile-navbar-menu-icon"
          onClick={() => setMobileBarIsOpen(!mobileBarIsOpen)}
        >
          <MenuIcon />
        </div>
      </div>
      <div
        className={
          mobileBarIsOpen
            ? `mobile-navbar-links-container`
            : `closed-mobile-navbar-general`
        }
      >
        <Link to={"/"}>Home</Link>
        <span onClick={() => setMinistryIsOpen(!ministryIsOpen)}>Ministry</span>
        <div
          className={
            ministryIsOpen
              ? "mobile-navbar-open-menu"
              : "closed-mobile-navbar-general"
          }
        >
          {ministry.map((ministry) => (
            <Link key={ministry.name} to={ministry.link}>
              <p>{ministry.name}</p>
            </Link>
          ))}
        </div>
        <span onClick={() => setWhoWeAreIsOpen(!whoWeAreIsOpen)}>
          Who We Are
        </span>
        <div
          className={
            whoWeAreIsOpen
              ? "mobile-navbar-open-menu"
              : "closed-mobile-navbar-general"
          }
        >
          {whoWeAre.map((data) => (
            <Link key={data.name} to={data.link}>
              <p>{data.name}</p>
            </Link>
          ))}
        </div>
        {navbarData.map((data) => (
          <Link key={data.name} to={data.link}>
            <span>{data.name}</span>
          </Link>
        ))}
        {userIsLoggedIn && <div onClick={handleSignout}>Logout</div>}
      </div>
    </div>
  );
}
