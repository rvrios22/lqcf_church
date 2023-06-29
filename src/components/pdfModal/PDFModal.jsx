import React from "react";
import "./pdfModal.css";
import { Close } from "@mui/icons-material";
function PDFModal({ data, setModal, modal, modalRef }) {
  return (
    <div className="modal-container">
      <div onClick={() => setModal(!modal)} className="close-icon">
        <Close />
      </div>
      {data.map((data) => (
        <div className="modal-item" key={data.id}>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <p>{data.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PDFModal;
