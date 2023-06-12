import React, { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

import "../css/events.css";
import EventsList from "../components/renderedEvents/EventsList";
import UpdateList from "../components/renderedEvents/UpdateList";

export default function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [isUpdateField, setIsUpdateField] = useState(false);

  const eventsRef = collection(db, "events");
  const eventQuery = query(eventsRef, orderBy("eventDate", "asc"));

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

  useEffect(() => {
    getEvents();
  }, []);

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
    const eventDoc = doc(db, "events", id);

    try {
      await deleteDoc(eventDoc);
      getEvents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateEvent = async (id) => {
    const eventDoc = doc(db, "events", id);

    try {
      await updateDoc(eventDoc, {});
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateField = () => {
    setIsUpdateField(!isUpdateField);
  };

  console.log(isUpdateField);
  return (
    <div className="events-parent">
      <h1 className="sub-header">Upcoming Events:</h1>
      {!isUpdateField ? (
        <EventsList
          data={eventsData}
          deleteDoc={handleDeleteEvent}
          isUpdateField={handleUpdateField}
        />
      ) : (
        <UpdateList data={eventsData} isUpdateField={handleUpdateField} />
      )}

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
