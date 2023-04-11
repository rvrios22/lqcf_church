import React from 'react'

import { whoWeAre } from '../navbar/navbarData'
import { Link } from 'react-router-dom'

export default function WhoWeAre() {
  return (
    <div>
        {whoWeAre.map((data) => (
        <ul>
          <Link to={data.link}>
            <li key={data.name}>{data.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  )
}
