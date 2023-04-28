import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/map/map";
import { homeEvents } from "../mappingData";

import "../css/home.css";

export default function Home() {
  return (
    <div>
      <h1 className="header">La Quinta Christian Fellowship Church</h1>
      <img
        className="landing-image"
        alt="LQCF Church"
        src="./lqcfHome.jpg"
      />
      <div className="general-container">
        <p className="general-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          adipisci odio asperiores veniam excepturi, sed inventore nisi vitae
          repellat laboriosam aperiam facilis dolores perspiciatis, aliquid ab,
          explicabo eaque atque esse? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellendus delectus rerum eligendi suscipit iste
          quos ut numquam voluptas quo, nemo repudiandae officia natus,
          blanditiis autem reprehenderit quibusdam eum pariatur nesciunt.
        </p>
      </div>
      <div className="empty-spacer"></div>
      {/* <Map /> */}
      <h3 className="sub-header">What's Going On</h3>
      <div className="home-events-container">
        {homeEvents.map((event, idx) => (
          <div key={idx} className="event-square">
            <Link to={event.link}>
              <img
                src="/temp.jpg"
                alt={event.alt}
                className="event-image"
              />
            </Link>
            <p className="general-text">{event.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
