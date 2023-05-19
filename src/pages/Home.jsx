import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/map/map";
import { homeEvents } from "../mappingData";

import "../css/home.css";

export default function Home() {
  return (
    <div>
      <h1 className="header">La Quinta Christian Fellowship Church</h1>
      <img className="landing-image" alt="LQCF Church" src="./lqcfHome.jpg" />
      <div className="general-container">
        <p className="general-text">
          La Quinta Christian Fellowship Church is a non-denominational
          evangelical church committed to seeing redeemed, transformed
          individuals and community through the story of God's salvation. We
          gladly invite you to join us for Sunday morning worship service.
        </p>
        <p className="bible-text">
          Blessed be the God and Father of our Lord Jesus Christ, who has
          blessed us with every spiritual blessing in the heavenly places in
          Christ, just as He chose us in Him before the foundation of the
          world, that we would be holy and blameless before Him. In love
          He predestined us to adoption as sons through Jesus Christ to
          Himself, according to the kind intention of His will, to the
          praise of the glory of His grace, which He freely bestowed on us in
          the Beloved.
        </p>
        <p className="general-text">Ephesians 1:3-6</p>
      </div>
      <div className="empty-spacer"></div>
      {/* <Map /> */}
      <h3 className="sub-header">What's Going On</h3>
      <div className="home-events-container">
        {homeEvents.map((event, idx) => (
          <div key={idx} className="event-square">
            <Link to={event.link} target={event.target}>
              <img
                src={`./${event.photo}.jpg`}
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
