import React from 'react'

import { elderPage } from '../mappingData'

export default function Elders() {
  return (
    <div>
      <h2>Meet Our Pastors</h2>
      {elderPage.map((elder) => (
        <div className=''>
          <div>
            <img 
             src=''
             alt={elder.name}
            />
            <h4>{elder.name}</h4>
          </div>
          <div>
            <p>{elder.bio}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
