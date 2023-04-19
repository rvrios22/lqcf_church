import React from "react";

import { eventPage } from "../mappingData";

import "../css/events.css";

export default function Events() {
  return (
    <div>
      <h3 className="sub-header">Upcoming Events:</h3>
      {eventPage.map((event) => (
        <div className="event-container">
          <h4 className="sub-header">{event.name}</h4>
          <p className="general-text event-text">{event.description}</p>
          <p className="general-text event-text">{event.date}</p>
          <hr className="event-spacer"/>
        </div>
      ))}
    </div>
  );
}
