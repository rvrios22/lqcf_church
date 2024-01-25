import React, { Fragment, useEffect, useState } from "react";
import "./pdfModal.css";
import { Close } from "@mui/icons-material";
import ModalSelector from "../modalSelector/ModalSelector";
function PDFModal({ data, setModal, modal, setStudyCollection }) {
  const [dateFilteredData, setDateFilteredData] = useState([]);

  let newArr = [];
  useEffect(() => {
    data.forEach((pdf) => {
      newArr.push({
        title: pdf.title,
        link: pdf.link,
        id: pdf.id,
        date: new Date(pdf.date.seconds * 1000).toISOString().split("T")[0],
      });
    });
    setDateFilteredData(newArr);
  }, [data]);
  return (
    <div className="modal-container">
      <div onClick={() => setModal(!modal)} className="close-icon">
        <Close />
      </div>
      <ModalSelector setStudyCollection={setStudyCollection} />
      <div className="modal-headers">
        <h4>Title</h4>
        <h4>Date</h4>
      </div>
      <div className="modal-items">
        {dateFilteredData.map((pdf) => (
          <div key={pdf.id} className="modal-row">
            <a href={pdf.link} target="_blank" rel="noopener noreferrer">
              <p>{pdf.title}</p>
            </a>
            <p>{pdf.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PDFModal;
