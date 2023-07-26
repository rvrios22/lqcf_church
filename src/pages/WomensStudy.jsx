import React from "react";

import { Link } from "react-router-dom";

export default function WomensStudy() {
  return (
    <div className="general-container">
      <h1 className="header">Women's Ministry</h1>
      <img
        className="general-image"
        src="/womensStudyHeader.jpg"
        alt="Women's ministry at an outreach"
      />
      <p className="general-text">
        Women joining together in the Word, fellowship, encouragement, and
        prayer; to glorify God and enjoy Him forever! The call of this ministry
        is to bring us women into union with Christ, through the Holy Spirit by
        the reading, studying, and discussion of Holy Scriptures. Each gathering
        we magnify God in His Holiness and come to a proper view and position of
        self, in comparison to Christ Jesus our Lord and Savior. We glorify God
        in each of these studies, while building confidence and familiarity in
        the Scriptures, as well as, empowering one another in prayer, and
        creating a strong sisterhood in Christ. Each aspect of the ministry
        helps to equip and build confidence in sharing the Gospel and prayer
        with those we encounter.
      </p>
      <p className="general-text">
        Bible studies are hosted in a casual environment at Jennife's home, on
        the 2nd and 4th Friday of each month (any variations will be posted in
        the{" "}
        <Link to="/events">
          <span className="general-link">calendar</span>
        </Link>
        ) at 6:30 pm. Bring your Bibles and bring a treat or dish to share (if
        you can). Beverages, plates, and utensils are always provided.{" "}
      </p>
      <p className="general-text">
        Our current study is on Terms & Definitions. We are going through each
        block of terms that are broken up into: General Terms, Church Service
        Terms, Theological Terms, Commandment/Covenant Terms. The intent of this
        study is to grow in the knowledge of Heavenly Father, His Son Christ
        Jesus, and to be in fellowship with the Holy Spirit. Prayerfully,
        through each study we will have a better understanding of each of the
        terms, why they are important, where to find them in the Bible, and how
        to apply them to our daily worship and praise. Our previous study was in
        the Attributes of God. Each study is unique and created to be a
        stand-alone study, but pairs beautifully with the previous and upcoming
        studies. This allows the opportunity for ladies to join in when their
        schedule permits.
      </p>
      <p className="general-text">
        Jennifer has a passion for learning and teaching Scripture, and a heart
        for encouraging and leading the women in this ministry. Please feel free
        to contact Jennifer at 760-887-6523 (call or text), or email:
        jenniferclaire77@gmail.com with any questions about this ministry.{" "}
      </p>
      <p className="bible-text">~Soli Deo Gloria</p>
    </div>
  );
}
