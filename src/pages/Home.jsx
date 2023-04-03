import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/map/map";
import { homeEvents } from "../mappingData";

import '../css/home.css'

export default function Home() {
  return (
    <div>
      <h1>La Quinta Christian Fellowship Church</h1>
      <img alt="LQCF Church" src="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci
        odio asperiores veniam excepturi, sed inventore nisi vitae repellat
        laboriosam aperiam facilis dolores perspiciatis, aliquid ab, explicabo
        eaque atque esse? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Repellendus delectus rerum eligendi suscipit iste quos ut numquam
        voluptas quo, nemo repudiandae officia natus, blanditiis autem
        reprehenderit quibusdam eum pariatur nesciunt.
      </p>
      <Map />
      <h3>What's Going On</h3>
      {homeEvents.map((event) => (
        <div className="event-square">
          <div className="square">
            <Link to={event.link}>
               <img src={event.photo} 
               alt={event.alt} 
             />
            </Link>
            <p>{event.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
