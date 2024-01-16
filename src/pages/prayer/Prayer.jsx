import React from "react";
import "./prayer.css";
import PrayerForm from "../../components/prayerForm/PrayerForm";
import PrayerInfo from "../../components/prayerInfo/PrayerInfo";

export default function Prayer() {
  return (
    <>
      <PrayerInfo />
      <PrayerForm />
    </>
  );
}
