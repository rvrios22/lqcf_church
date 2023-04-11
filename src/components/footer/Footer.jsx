import React from "react";

import Map from "../map/map";

import "../../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Map />
      <p>
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
