import React, { useEffect, useState, useRef } from "react";

import { elderPage } from "../mappingData";

import "../css/elder.css";

export default function Elders() {
  const [screenWidth, setScreenWidth] = useState(getCurrentWidth());
  const [imageHeight, setImageHeight] = useState();
  const imageRef = useRef(null);

  function getCurrentWidth() {
    return {
      width: window.innerWidth,
    };
  }

  function getHeightOfImages() {
    return imageRef.current.clientHeight;
  }

  //useEffect to track height of the images
  useEffect(() => {
    setImageHeight(getHeightOfImages);
    const updateHeight = () => {
      setImageHeight(getHeightOfImages());
    };
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [imageHeight]);

  //useEffect for tracking width of the page
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(getCurrentWidth());
    };
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenWidth]);

  return (
    <div className="general-container">
      <h1 className="header">Meet Our Pastors</h1>
      {elderPage.map((elder) => (
        <div key={elder.name} className="elder-container">
          <div className="elder-image-container">
            <img
              className="elder-image"
              src={
                screenWidth.width >= 800
                  ? `./${elder.portrait}.jpg`
                  : `./${elder.landscape}.jpg`
              }
              alt={elder.name}
              ref={imageRef}
            />
            <h4 className="sub-header">{elder.name}</h4>
          </div>
          <div className="elder-bio">
            <p
              className="elder-text"
              style={screenWidth.width >= 800 ? { height: imageHeight } : {}}
            >
              {elder.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
