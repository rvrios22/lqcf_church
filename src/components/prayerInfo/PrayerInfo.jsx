import React from "react";
import "./prayerInfo.css";

function PrayerInfo() {
  return (
    <div>
      <h1 className="header">Why Should We Pray?</h1>
      <div className="general-container">
        <p className="general-text">
          God commands that we join with other faithful Christians to pray over
          those who are seeking prayer.
        </p>
        <p className="bible-text">
          "Is any sick among you? Let him call for the elders of the church; and
          let them pray over him, anointing him with oil in the name of the
          Lord: And the prayer of faith shall save the sick, and the Lord shall
          raise him up; and if he have committed sins, they shall be forgiven
          him.”
        </p>
        <p className="general-text">James 5:14-15</p>
        <div>
          <h3 className="sub-header">Are You In Need of Prayer?</h3>
          <p className="general-text">
            Please fill out our form to send us your prayer request and we will
            pray for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrayerInfo;
