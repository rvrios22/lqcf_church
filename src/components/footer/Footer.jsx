import React from "react";

import Map from "../map/map";

import "../../App.css";
import "../../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid-container">
        <div className="footer-grid-item">
          <h3 className="footer-header">Service and Times:</h3>
          <p className="footer-general-text">Sunday Bible Study: 9:00 AM</p>
          <p className="footer-general-text">Sunday Service: 10:00 AM</p>
          <p className="footer-general-text">Wednesday Service: 6:30 PM</p>
        </div>
        <div className="footer-gird-item">
          <p className="footer-general-text">Physical Address:</p>
          <p className="footer-general-text">50800 Calle Paloma, La Quinta CA 92253</p>
        </div>
        <Map />
      </div>
      <p className="general-text rios-link">
        Developed and maintained by{" "}
        <a
          href="http://riosdevelopment.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          RIOSDEVELOPMENT
        </a>
      </p>
    </div>
  );
}
