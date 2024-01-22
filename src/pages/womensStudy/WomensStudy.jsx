import React, { useEffect, useState } from "react";
import PDFModal from "../../components/pdfModal/PDFModal";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  orderBy,
  query,
  setDoc,
  doc,
} from "firebase/firestore";
import "./womensStudy.css";
import WomensStudyInfo from "../../components/womensStudyInfo/WomensStudyInfo";

export default function WomensStudy() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [pdfData, setPDFData] = useState([]);

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
    getPDF();
  }, []);

  return (
    <div className="general-container">
      <WomensStudyInfo
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
      />
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
