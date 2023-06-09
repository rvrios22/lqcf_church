import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import MobileNavbar from "../mobileNavbar/MobileNavbar";
import Working from "../maintinance/Working";

export default function NavbarFooterWrapper() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <div className="flex-footer">
        <div className="upper-child">
          <Outlet />
        </div>
        <div className="footer-child">
          <Footer />
        </div>
        <div>
          <Working />
        </div>
      </div>
    </div>
  );
}
