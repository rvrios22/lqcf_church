import React from "react";
import Event from "../event/Event";
import "./eventsMap.css";
function EventsMap({ eventsData, getEvents, user }) {
  return (
    <>
      <h1 className="sub-header">Upcoming Events:</h1>
      {eventsData.map((event) => (
        <Event
          key={event.id}
          title={event.eventTitle}
          desc={event.eventDesc}
          date={event.eventDate}
          id={event.id}
          getEvents={getEvents}
          user={user}
        />
      ))}
    </>
  );
}

export default EventsMap;
