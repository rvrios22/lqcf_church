import React from 'react'

import { eventPage } from '../mappingData'

export default function Events() {
  return (
    <div>
      <h3 className='sub-header'>Upcoming Events:</h3>
      {eventPage.map((event) => (
        <div>
          <h4 className='sub-header'>{event.name}</h4>
          <p className='general-text'>{event.description}</p>
          <p className='general-text'>{event.date}</p>
        </div>
      ))}
    </div>
  )
}
