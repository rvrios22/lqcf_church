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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((pdf) => (
            <tr key={pdf.id}>
              <a href={pdf.link} target="_blank">
                <td>{pdf.title}</td>
                <td>{pdf.date}</td>
              </a>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PDFModal;
