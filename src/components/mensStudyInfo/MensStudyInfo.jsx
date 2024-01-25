import React from "react";
import { Link } from "react-router-dom";
import "./MensStudyInfo.css";
function MensStudyInfo({ setIsModalActive, isModalActive }) {
  const handleOnCLick = () => {
    setIsModalActive(!isModalActive);
  };
  return (
    <>
      <h1 className="header">Men's Study</h1>
      <img
        className="general-image"
        src="./mensStudyHeader.avif"
        alt="Man reading a bible"
      />
      <p className="general-text">
        Our men's ministry is led by Pastor Curtis Claire. We are currently
        studying the Trinity, which is one of the oldest Orthodox teachings of
        the Christian faith. The teaching that "God is like an egg" is both
        heretical and falls far short of knowing the glory and splendor of our
        true Triune God. If rejection of the Trinity equates to heresy, then it
        is vital that we, the church, get it right. We meet at 7:30 AM in the
        sanctuary of the church every 2nd and 4th Saturday of each month. Please
        see our{" "}
        <Link to="/events">
          <span className="general-link">events</span>
        </Link>{" "}
        page to verify our meeting dates each month as well as the topic of our
        study.
      </p>
      <p className="general-text">
        To see a list of all of the outlines in this series click{" "}
        <span
          className="modal-click"
          onClick={handleOnCLick}
        >
          here
        </span>
      </p>
    </>
  );
}

export default MensStudyInfo;
