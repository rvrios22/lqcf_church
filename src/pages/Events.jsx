import React, { useEffect, useState } from "react";

import { eventPage } from "../mappingData";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

import "../css/events.css";

export default function Events() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsData = await getDocs(collection(db, "events"));
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
  }, []);

  console.log(eventsData)
  return (
    <div className="events-parent">
      <h1 className="sub-header">Upcoming Events:</h1>
      {eventsData.map((event, idx) => (
        <div className="event-container" key={event.id}>
          <h3 className="event-header">{event.eventTitle}</h3>
          <p className="event-text">{event.eventDesc}</p>
          <p className="event-text">{event.eventDate}</p>
          <hr className="event-spacer" />
        </div>
      ))}
    </div>
  );
}
