import React from "react";
import { Link } from "react-router-dom";
import { homeEvents } from "../../mappingData";
import "./whatsGoingOn.css";

function WhatsGoingOn() {
  return (
    <>
      <h3 className="sub-header">What's Going On</h3>
      <div className="home-events-container">
        {homeEvents.map((event, idx) => (
          <div key={idx} className="event-square">
            <Link to={event.link} target={event.target}>
              <img
                src={`./${event.photo}.avif`}
                alt={event.alt}
                className="event-image"
                loading="lazy"
                height='182'
                width='409'
              />
            </Link>
            <p className="general-text">{event.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhatsGoingOn;
