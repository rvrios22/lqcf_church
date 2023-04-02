import React, { useMemo } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

import '../../css/map.css'

export default function map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  })
  const center = useMemo(() => ({lat: 33.67970811726253, lng: -116.29337732321008}), [])

  return (
    <div>
      <h3>Service and Times:</h3>
      <ul>
        <li>Sunday Service: 10:00 AM</li>
        <li>Wednesday Service: 6:30 PM</li>
        <li>Bible Study: 9:00 AM</li>
      </ul>
      
      {!isLoaded ? (
        <h2>Loading...</h2>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <MarkerF position={center}/>
        </GoogleMap>
      )}
    </div>
  )
}
