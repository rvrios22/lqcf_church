import React, { useEffect, useState } from "react";

import { eventPage } from "../mappingData";

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase-config";

import "../css/events.css";

export default function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  const eventsRef = collection(db, "events");
  const eventQuery = query(eventsRef, orderBy("eventDate", "asc"));

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsData = await getDocs(eventQuery);
        const filteredEventsData = eventsData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEventsData(filteredEventsData);
      } catch (error) {
        console.error(error);
      }
    };

    getEvents();
  }, [handleAddEvent]);

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

  const handleDeleteEvent = async (id) => {
    const eventDoc = doc(db, "events", id)
    try {
      await deleteDoc(eventDoc)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="events-parent">
      <h1 className="sub-header">Upcoming Events:</h1>
      {eventsData.map((event, idx) => (
        <div className="event-container" key={event.id}>
          <h3 className="event-header">{event.eventTitle}</h3>
          <p className="event-text">{event.eventDesc}</p>
          <p className="event-text">{event.eventDate}</p>
          <hr className="event-spacer" />
          <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
        </div>
      ))}
      <div className="add-event-container">
        <label htmlFor="add-event-title">Title: </label>
        <input
          type="text"
          id="add-event-title"
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <label htmlFor="add-event-date">Date</label>
        <input
          type="text"
          id="add-event-date"
          onChange={(e) => setEventDate(e.target.value)}
        />
        <label htmlFor="add-event-desc">Description</label>
        <textarea
          name="event-desc"
          id="add-event-desc"
          cols="30"
          rows="10"
          onChange={(e) => setEventDesc(e.target.value)}
        ></textarea>
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
}
