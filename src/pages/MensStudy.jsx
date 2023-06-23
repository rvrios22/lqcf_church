import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PDFModal from "../components/pdfModal/PDFModal";
import { db } from "../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function MensStudy() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [pdfData, setPDFData] = useState([]);

  const pdfRef = collection(db, "men-pdf");
  const pdfQuery = query(pdfRef, orderBy("date", "asc"));

  const getPDF = async () => {
    try {
      const pdfData = await getDocs(pdfQuery);
      const filteredPDFData = pdfData.docs.map((pdf) => ({
        ...pdf.data(),
        id: pdf.id,
      }));
      setPDFData(filteredPDFData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPDF();
  }, []);

  return (
    <div className="general-container">
      <h1 className="header">Men's Study</h1>
      <img
        className="general-image"
        src="./mensStudyHeader.jpg"
        alt="Man reading a bible"
      />
      <p className="general-text">
        Our Men's Ministry is lead by Pastor Curtis Claire. For the past year,
        our men have been studying the attributes of God using an outline of the
        shorter Westminster Catechism "A Body of Divinity" by Thomas Watson. We
        meet at 7:30AM in the sanctuary of the church every 2nd and 4th Saturday
        of each month. Please see our{" "}
        <Link to="/events">
          <span className="general-link">events</span>
        </Link>{" "}
        page to verify our meeting dates each month as well as the topic of our
        study.
      </p>
      <p className="general-text">
        To see a list of all of the outlines in this series click{" "}
        <span
          className="modal-click"
          onClick={() => setIsModalActive(!isModalActive)}
        >
          here
        </span>
      </p>
      <div className={!isModalActive ? "deactive-modal" : "active-modal"}>
        <PDFModal
          data={pdfData}
          setModal={setIsModalActive}
          modal={isModalActive}
        />
      </div>
    </div>
  );
}
