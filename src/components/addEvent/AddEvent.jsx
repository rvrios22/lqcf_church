import React, { useState } from "react";
import { addDoc } from "firebase/firestore";

function AddEvent( {eventsRef, getEvents}) {
  //states to handle adding a new event
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  const handleAddEvent = async () => {
    try {
      await addDoc(eventsRef, {
        eventTitle: eventTitle,
        eventDesc: eventDesc,
        eventDate: eventDate,
      });
      setEventTitle("");
      setEventDate("");
      setEventDesc("");
      getEvents();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="add-event-container">
      <label className="add-event-label" htmlFor="add-event-title">Title: </label>
      <input
        className="add-event-input"
        type="text"
        id="add-event-title"
        onChange={(e) => setEventTitle(e.target.value)}
        value={eventTitle}
      />
      <label className="add-event-label" htmlFor="add-event-date">Date</label>
      <input
        className="add-event-input"
        type="text"
        id="add-event-date"
        onChange={(e) => setEventDate(e.target.value)}
        value={eventDate}
      />
      <label className="add-event-label" htmlFor="add-event-desc">Description</label>
      <textarea
        className="add-event-input"
        name="event-desc"
        id="add-event-desc"
        cols="30"
        rows="10"
        onChange={(e) => setEventDesc(e.target.value)}
        value={eventDesc}
      ></textarea>
      <button className="add-event-button" onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}

export default AddEvent;
