import React from "react";

import "../css/giving.css";

export default function Giving() {
  return (
    <div>
      <h1 className="header">Tithes and Offerings</h1>
      <div className="general-container">
        <p className="general-text">
          At La Quinta Christian Fellowship, we are called to glorify God in all
          acts of worship, including tithes and offerings. Faithful giving is an
          act of worship, and should be given regularly, in love, as well as
          faithfully, with a heart of gratitude and thanksgiving.
        </p>
        <p className="general-text">2 Corinthians 6:6-15</p>
        <p className="bible-text">
          “Praise God from whom all blessings flow… Praise God, our portion here
          below!”
        </p>
        <div>
          <h3 className="sub-header">Ways to Give:</h3>

          <p className="general-text">You can Zelle us at:</p>
          <p className="general-text">
            Give in person during our Sunday morning or Wednesday evening
            service
          </p>
          <p className="general-text">Mail your offering to: </p>
        </div>
      </div>
    </div>
  );
}
