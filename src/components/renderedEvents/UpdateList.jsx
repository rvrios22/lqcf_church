import React from "react";

function UpdateList({ data, isUpdateField }) {
  return (
    <div>
      {data.map((event) => (
        <div className="update-container">
            <label htmlFor=""></label>
          <input type="text" placeholder={event.eventTitle} />
          <button onClick={isUpdateField}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default UpdateList;
