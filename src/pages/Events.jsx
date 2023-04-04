import React from 'react'

import { eventPage } from '../mappingData'

export default function Events() {
  return (
    <div>
      <h2>Upcoming Events:</h2>
      {eventPage.map((event) => (
        <div>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  )
}
