import React, { useEffect, useState } from "react";
import PDFModal from "../../components/pdfModal/PDFModal";
import { auth, db } from "../../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import "./mensStudy.css";
import MensStudyInfo from "../../components/mensStudyInfo/MensStudyInfo";
import PDFUploader from "../../components/pdfUploader/PDFUploader";
import { useLocation } from "react-router-dom";

export default function MensStudy() {
  const [isModalActive, setIsModalActive] = useState(true);
  const [pdfData, setPDFData] = useState([]);
  const [user, setUser] = useState(false);
  const [studyCollection, setStudyCollection] = useState("");
  const [modalSelectorValue, setModalSelectorValue] = useState("");

  const [locationIsSet, setLocationIsSet] = useState(false);

  const location = useLocation();

  const getPDF = async () => {
    if (!locationIsSet) return;
    const pdfRef = collection(db, studyCollection);
    const pdfQuery = query(pdfRef, orderBy("date", "asc"));
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

  const getLocation = () => {
    const path = location.pathname;
    setLocationIsSet(true);
    if (path === "/mens-study") {
      setStudyCollection("trinity-men");
      setModalSelectorValue("trinity-men");
    } else if (path === "/womens-study") {
      setStudyCollection("termsAndDefinitions-women");
      setModalSelectorValue("termsAndDefinitions-women");
    }
  };

  useEffect(() => {
    if (auth.currentUser != null) {
      setUser(true);
    }
    getLocation();
  }, []);

  useEffect(() => {
    getPDF();
  }, [studyCollection, locationIsSet]);

  return (
    <div className="general-container">
      <MensStudyInfo
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
      />
      {user && <PDFUploader />}

      <div className={!isModalActive ? "deactive-modal" : "active-modal"}>
        <PDFModal
          setData={setPDFData}
          data={pdfData}
          setModal={setIsModalActive}
          modal={isModalActive}
          setStudyCollection={setStudyCollection}
          modalSelectorValue={modalSelectorValue}
          setModalSelectorValue={setModalSelectorValue}
        />
      </div>
    </div>
  );
}
