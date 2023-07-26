import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

import "../../css/map.css";

export default function map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 33.67970811726253, lng: -116.29337732321008 }),
    []
  );

  return (
    <div>
      <div className="footer-grid-ite">
        {/* {!isLoaded ? (
            <h3 className="sub-header">Loading...</h3>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={15}
            >
              <MarkerF position={center} />
            </GoogleMap>
          )} */}
        <img
          className="church-map"
          src="./churchMap.jpg"
          alt="a map where the church is located"
        />
      </div>
    </div>
  );
}
