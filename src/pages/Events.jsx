import React from "react";

import { eventPage } from "../mappingData";

import "../css/events.css";

export default function Events() {
  return (
    <div className="events-parent">
      <h1 className="sub-header">Upcoming Events:</h1>
      {eventPage.map((event, idx) => (
        <div className="event-container" key={idx}>
          <h3 className="event-header">{event.name}</h3>
          <p className="event-text">{event.description}</p>
          <p className="event-text">{event.date}</p>
          <hr className="event-spacer"/>
        </div>
      ))}
    </div>
  );
}
