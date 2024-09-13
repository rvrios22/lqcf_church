import React, { useEffect, useState } from "react";
import "./landing.css";

function Landing() {
  const [imgDimensions, setImgDimensions] = useState({ height: 0, width: 0 });

  const handleImgDimensions = (e) => {
    setImgDimensions({
      height: window.innerHeight - 43.5,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleImgDimensions);

    return () => {
      window.removeEventListener("resize", handleImgDimensions);
    };
  }, []);
  return (
    <>
      <div className="home-page-landing">
        <h1
          className={`header home-page-header ${
            imgDimensions.height ? "visible" : ""
          }`}
        >
          La Quinta Christian Fellowship Church
        </h1>
        <img
          className="landing-image"
          alt="LQCF Church"
          src="./lqcfHome.avif"
          onLoad={handleImgDimensions}
          height={
            !imgDimensions.height
              ? window.innerHeight - 43.5
              : imgDimensions.height
          }
          width={!imgDimensions.width ? window.innerWidth : imgDimensions.width}
        />
      </div>
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
          Christ, just as He chose us in Him before the foundation of the world,
          that we would be holy and blameless before Him. In love He predestined
          us to adoption as sons through Jesus Christ to Himself, according to
          the kind intention of His will, to the praise of the glory of His
          grace, which He freely bestowed on us in the Beloved.
        </p>
        <p className="general-text">Ephesians 1:3-6</p>
      </div>
    </>
  );
}

export default Landing;
