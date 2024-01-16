import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid-container">
        <div className="footer-grid-item">
          <h3 className="footer-header">Service and Times:</h3>
          <p className="footer-general-text">Sunday Bible Study: 9:00AM</p>
          <p className="footer-general-text">Sunday Service: 10:00AM</p>
          <p className="footer-general-text">Wednesday Service: 6:30PM</p>
        </div>
        <div className="footer-gird-item">
          <h3 className="footer-header">Physical Address:</h3>
          <p className="footer-general-text">50800 Calle Paloma</p>
          <p className="footer-general-text">La Quinta CA 92253</p>
          <h3 className="footer-header">Mailing Address:</h3>
          <p className="footer-general-text">P.O. Box 676</p>
          <p className="footer-general-text">La Quinta CA 92247</p>
          <p className="footer-general-text">
            <a href="tel:+">760-564-9195</a>
          </p>
        </div>

        <img
          className="church-map"
          src="./churchMap.jpg"
          alt="a map where the church is located"
        />
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
