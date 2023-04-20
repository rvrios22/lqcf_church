import React from 'react'

import { elderPage } from '../mappingData'

import "../css/elder.css";

export default function Elders() {
  return (
    <div>
      <h1 className='header'>Meet Our Pastors</h1>
      {elderPage.map((elder) => (
        <div className='general-container'>
          <div className='elder-image-container'>
            <img 
             className='general-image elder-image'
             src='./temp.jpg'
             alt={elder.name}
            />
            <h4 className='sub-header'>{elder.name}</h4>
          </div>
          <div className='elder-bio'>
            <p className='general-text elder-text'>{elder.bio}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
