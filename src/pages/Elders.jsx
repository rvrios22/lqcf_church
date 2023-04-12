import React from 'react'

import { elderPage } from '../mappingData'

export default function Elders() {
  return (
    <div>
      <h1 className='header'>Meet Our Pastors</h1>
      {elderPage.map((elder) => (
        <div className='elder-container'>
          <div className='elder-image-container'>
            <img 
             className='general-image elder-image'
             src=''
             alt={elder.name}
            />
            <h4>{elder.name}</h4>
          </div>
          <div className='elder-bio'>
            <p>{elder.bio}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
