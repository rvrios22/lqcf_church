import React from "react";
import { youthPage } from "../../mappingData";
import "./identityYouthInfo.css";

function IdentityYouthInfo() {
  return (
    <div className="general-container">
      <h1 className="header">Identity Youth</h1>
      <img src="./youthGroupHeader.avif" alt="" className="youth-image" />
      <p className="general-text">
        Our youth group meets wednesday nights during our wednesday night
        service after worship. The group is lead by our youth director Reina
        Rios and Pastor Mark Cook.
      </p>
      {youthPage.map((data) => (
        <div key={data.header}>
          <h3 className="sub-header">{data.header}</h3>
          <p className="general-text">{data.text}</p>
          <p className="bible-text">{data.bible}</p>
        </div>
      ))}
    </div>
  );
}

export default IdentityYouthInfo;
