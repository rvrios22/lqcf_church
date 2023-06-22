import React, { useState } from "react";
import { db } from "../../firebase-config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

function Event({ title, desc, date, id, getEvents, user }) {
  const [isEditActive, setIsEditActive] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDesc, setEditedDesc] = useState(desc);
  const [editedDate, setEditedDate] = useState(date);

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
      await updateDoc(eventDoc, {
        eventTitle: editedTitle,
        eventDate: editedDate,
        eventDesc: editedDesc,
      });
      getEvents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!isEditActive ? (
        <>
          <h3 className="event-header">{title}</h3>
          <p className="event-text">{desc}</p>
          <p className="event-text">{date}</p>
          {user && <button onClick={() => handleDeleteEvent(id)}>Delete</button>}
          {user && <button onClick={() => setIsEditActive(!isEditActive)}>Edit</button>}
        </>
      ) : (
        <>
          <label htmlFor="edit-title">Title: </label>
          <input
            type="text"
            id="edit-title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <label htmlFor="edit-desc">Description: </label>
          <textarea
            type="text"
            id="edit-desc"
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
          ></textarea>
          <label htmlFor="edit-date">Date: </label>
          <input
            type="text"
            id="edit-date"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
          />
          <button onClick={() =>{
            handleUpdateEvent(id)
            setIsEditActive(!isEditActive)
          }}>Submit</button>
        </>
      )}
      <hr className="event-spacer" />
    </div>
  );
}

export default Event;
