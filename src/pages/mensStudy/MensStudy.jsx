import React, { useEffect, useState } from "react";
import PDFModal from "../../components/pdfModal/PDFModal";
import { auth, db } from "../../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import "./mensStudy.css";
import MensStudyInfo from "../../components/mensStudyInfo/MensStudyInfo";
import PDFUploader from "../../components/pdfUploader/PDFUploader";

export default function MensStudy() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [pdfData, setPDFData] = useState([]);
  const [user, setUser] = useState(false);

  const pdfRef = collection(db, "trinity-men");
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
  }, []);

  return (
    <div className="general-container">
      <MensStudyInfo
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
      />
      {/* {user && <PDFUploader />} */}
      <PDFUploader />

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
