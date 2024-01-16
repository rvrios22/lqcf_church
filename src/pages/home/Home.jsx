import React from "react";

import "./home.css";
import Landing from "../../components/landing/Landing";
import WhatsGoingOn from "../../components/whatsGoingOn/WhatsGoingOn";

export default function Home() {
  return (
    <div>
      <Landing />
      <WhatsGoingOn />
    </div>
  );
}
