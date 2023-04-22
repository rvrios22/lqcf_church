import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";

export default function NavbarFooterWrapper() {
  return (
    <div>
      <Navbar />
      <div className="flex-footer">
        <div className="upper-child">
          <Outlet />
        </div>
        <div className="footer-child">
          <Footer />
        </div>
      </div>
    </div>
  );
}
