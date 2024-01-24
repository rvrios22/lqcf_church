import React, { Fragment, useEffect, useState } from "react";
import "./pdfModal.css";
import { Close } from "@mui/icons-material";
function PDFModal({ setPDFData, data, setModal, modal }) {
  const [newData, setNewData] = useState([]);

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
    setNewData(newArr);
  }, [data]);
  return (
    <div className="modal-container">
      <div onClick={() => setModal(!modal)} className="close-icon">
        <Close />
      </div>
      <div className="modal-grid-container">
        <div className="modal-headers">
          <h4>Title</h4>
          <h4>Date</h4>
        </div>
        <div className="modal-items">
          {newData.map((pdf) => (
            <div key={pdf.id} className="modal-row">
              <a href={pdf.link} target="_blank" rel="noopener noreferrer">
                <p>{pdf.title}</p>
              </a>
                <p>{pdf.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PDFModal;
