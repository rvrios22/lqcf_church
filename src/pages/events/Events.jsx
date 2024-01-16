import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import "./events.css";
import AddEvent from "../../components/addEvent/AddEvent";
import EventsMap from "../../components/eventsMap/EventsMap";
import Loader from "../../components/loader/Loader";

export default function Events() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const eventsRef = collection(db, "events");
  const eventQuery = query(eventsRef, orderBy("eventDate", "asc"));

  const getEvents = async () => {
    try {
      setIsLoading(true);
      const eventsData = await getDocs(eventQuery);
      const filteredEventsData = eventsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEventsData(filteredEventsData);
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (auth.currentUser != null) {
      setUser(true);
    }
    getEvents();
  }, []);

  return (
    <div className="events-parent event-container">
      {isLoading ? (
        <Loader />
      ) : (
        <EventsMap eventsData={eventsData} getEvents={getEvents} user={user} />
      )}
      {user && <AddEvent getEvents={getEvents} eventsRef={eventsRef} />}
    </div>
  );
}
