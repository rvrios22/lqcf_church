import React from "react";

import '../css/giving.css'

export default function Giving() {
  return (
    <div>
      <h1 className="header">Tithes and Offerings</h1>
      <div className="giving-container">
        <p className="general-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio neque
          nisi eius animi maxime fuga minima a asperiores. Molestias nostrum
          ducimus eum cumque sequi quae esse expedita minima animi nesciunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam
          doloremque nostrum possimus molestias voluptatum earum ad! Dignissimos
          ipsam aut voluptates porro, culpa, cumque ut delectus officiis maxime
          ipsa sequi.
        </p>
        <div>
          <h3 className="sub-header">Ways to Give:</h3>

          <p className="general-text">You can Zelle us at:</p>
          <p className="general-text">
            Give in person during our Sunday morning or Wednesday evening
            service
          </p>
          <p className="general-text">Mail your offering to: </p>
        </div>
      </div>
    </div>
  );
}
