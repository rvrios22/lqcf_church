import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <>{windowWidth >= 600 ? <Navbar /> : <MobileNavbar />}</>;
}

export default Header;
