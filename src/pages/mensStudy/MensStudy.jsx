import React, { useEffect, useState } from "react";
import PDFModal from "../../components/pdfModal/PDFModal";
import { auth, db } from "../../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import "./mensStudy.css";
import MensStudyInfo from "../../components/mensStudyInfo/MensStudyInfo";
import PDFUploader from "../../components/pdfUploader/PDFUploader";

export default function MensStudy() {
  const [isModalActive, setIsModalActive] = useState(true);
  const [pdfData, setPDFData] = useState([]);
  const [user, setUser] = useState(false);
  const [studyCollection, setStudyCollection] = useState("trinity-men");
  const pdfRef = collection(db, studyCollection);
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
    if (auth.currentUser != null) {
      setUser(true);
    }
    getPDF();
  }, [studyCollection]);

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
        />
      </div>
    </div>
  );
}
