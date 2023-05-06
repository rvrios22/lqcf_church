import React from 'react'

import { elderPage } from '../mappingData'

import "../css/elder.css";

export default function Elders() {
  return (
    <div className='general-container'>
      <h1 className='header'>Meet Our Pastors</h1>
      {elderPage.map((elder) => (
        <div key={elder.name} className='elder-container'>
          <div className='elder-image-container'>
            <img 
             className='elder-image'
             src='./temp.jpg'
             alt={elder.name}
            />
            <h4 className='sub-header'>{elder.name}</h4>
          </div>
          <div className='elder-bio'>
            <p className='elder-text'>{elder.bio}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
