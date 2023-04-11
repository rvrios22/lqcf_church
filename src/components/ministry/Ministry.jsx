import React from 'react'
import { ministry } from '../navbar/navbarData'
import { Link } from 'react-router-dom'

function Ministry() {
  return (
    <div>
        {ministry.map((ministry) => (
            <ul>
                <Link to={ministry.link}>
                    <li key={ministry.name}>{ministry.name}</li>
                </Link>
            </ul>
        ))}
    </div>
  )
}

export default Ministry