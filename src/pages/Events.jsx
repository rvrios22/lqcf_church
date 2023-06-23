import React, { useEffect, useState } from "react";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "../firebase-config";

import "../css/events.css";
import Event from "../components/event/Event";
import AddEvent from "../components/addEvent/AddEvent";

export default function Events() {
  //state to get event data from Firebase
  const [eventsData, setEventsData] = useState([]);

  //state to verify if user is signed in
  const [user, setUser] = useState(false);

  //varables to handle collection and query from Firebase
  const eventsRef = collection(db, "events");
  const eventQuery = query(eventsRef, orderBy("eventDate", "asc"));

  //function to get event data from firebase
  const getEvents = async () => {
    //try block fetches data, filters result to have relevant data, then sets state
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

  //fetches data on mount
  useEffect(() => {
    if (auth.currentUser != null) {
      setUser(true);
    }

    getEvents();
  }, []);

  return (
    <div className="events-parent event-container">
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
      {user && <AddEvent getEvents={getEvents} eventsRef={eventsRef} />}
    </div>
  );
}
