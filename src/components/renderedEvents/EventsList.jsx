import React from "react";

function EventsList({ data, deleteDoc, isUpdateField }) {
  return (
    <div>
      {data.map((event, idx) => (
        <div className="event-container" key={event.id}>
          <h3 className="event-header">{event.eventTitle}</h3>
          <p className="event-text">{event.eventDesc}</p>
          <p className="event-text">{event.eventDate}</p>
          <hr className="event-spacer" />
          <button onClick={() => deleteDoc(event.id)}>Delete</button>
          <button onClick={isUpdateField}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default EventsList;
