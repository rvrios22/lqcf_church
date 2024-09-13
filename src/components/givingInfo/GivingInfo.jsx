import React, { useEffect, useRef } from "react";
import "./givingInfo.css";

function GivingInfo() {
  const ref = useRef(null);

  const handleCSS = () => {
    ref.current.style.color = "blue";
  };
  return (
    <div>
      <h1 className="header">Tithes and Offerings</h1>
      <p className="bible-text">
        “Praise God from whom all blessings flow… Praise God, our portion here
        below!”
      </p>
      <div className="general-container">
        <p className="general-text">
          At La Quinta Christian Fellowship, we are called to glorify God in all
          acts of worship, including tithes and offerings. Faithful giving is an
          act of worship and should be given regularly, in love, as well as
          faithfully, with a heart of gratitude and thanksgiving.
        </p>
        <p className="general-text">2 Corinthians 9:6-15</p>
        <div>
          <h3 className="sub-header">Ways to Give:</h3>

          <p className="general-text">
            Give in person during our Sunday morning servicve or Wednesday
            evening service
          </p>
          <p className="general-text">
            Mail your offering to: P.O. Box 676 La Quinta, CA 92247
          </p>
          {/* <p className="general-text">
            Give online by clicking {""}
            <a
              href="https://www.zeffy.com/donation-form/5da45795-5ea3-42d7-8d39-bb107f0ce0db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="general-link">here</span>
            </a>
          </p> */}
        </div>
      </div>

      {/* <div className="zeffy-container">
        <iframe
          title="Donation form powered by Zeffy"
          className="zeffy-frame"
          src="https://www.zeffy.com/embed/donation-form/5da45795-5ea3-42d7-8d39-bb107f0ce0db"
          allowpaymentrequest="true"
          allowtransparency="true"
          ref={ref}
          onLoad={handleCSS}
        ></iframe>
      </div> */}
    </div>
  );
}

export default GivingInfo;
