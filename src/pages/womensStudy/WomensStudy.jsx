import React, { useEffect, useState } from "react";
import PDFModal from "../../components/pdfModal/PDFModal";
import { auth, db } from "../../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import "./womensStudy.css";
import WomensStudyInfo from "../../components/womensStudyInfo/WomensStudyInfo";
import PDFUploader from "../../components/pdfUploader/PDFUploader";

export default function WomensStudy() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [pdfData, setPDFData] = useState([]);
  const [user, setUser] = useState(false);

  const pdfRef = collection(db, "termsAndDefinitions-women");
  const pdfQuery = query(pdfRef, orderBy("title", "asc"));

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
      <WomensStudyInfo
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
      />
      {user && <PDFUploader />}
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
