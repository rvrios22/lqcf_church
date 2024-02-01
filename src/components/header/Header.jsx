import React, { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [user, setUser] = useState({ userIsLoggedIn: false, userEmail: "" });
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth);
    setUser({
      userIsLoggedIn: false,
      userEmail: "",
    });
    navigate(0);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          userEmail: auth.currentUser.email.split('@')[0],
          userIsLoggedIn: true,
        });
      }
    });
  }, [user.userIsLoggedIn]);

  return (
    <>
      {windowWidth >= 600 ? (
        <Navbar userIsLoggedIn={user.userIsLoggedIn} userEmail={user.userEmail} handleSignout={handleSignout} />
      ) : (
        <MobileNavbar userIsLoggedIn={user.userIsLoggedIn} userEmail={user.userEmail} handleSignout={handleSignout} />
      )}
    </>
  );
}

export default Header;
