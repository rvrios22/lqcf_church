import React from "react";

import Map from "../map/map";

import '../../App.css';
import "../../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="sub-header">Service and Times:</h3>
      <div>      
          <p className="general-text">Sunday Bible Study: 9:00 AM</p>
          <p className="general-text">Sunday Service: 10:00 AM</p>
          <p className="general-text">Wednesday Service: 6:30 PM</p>
      </div>
      <Map />
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
