import React from "react";
import { Link } from "react-router-dom";

export default function MensStudy() {
  return (
    <div className="general-container">
      <h1 className="header">Men's Study</h1>
      <img className="general-image" src="./mensStudyHeader.jpg" alt="Man reading a bible" />
      <p className="general-text">
        Our Men's Ministry is lead by Pastor Curtis Claire. For the past year,
        we have been studying the attributes of God and using a book by the
        Puritan author Thomas Watson as a guide through our study. The attrubute
        we are currently studying is the Asiety of God. We meet at 7:30AM in
        the sanctuary of the church every 2nd and 4th Saturday of each month.
        Please see our{" "}
        <Link to="/events">
          <span className="general-link">events</span>
        </Link>{" "}
        page to verify our meeting dates each month as well as the topic of our
        study.
      </p>
    </div>
  );
}
