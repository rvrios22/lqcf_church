import React, { useEffect, useState } from "react";
import "./pdfModal.css";
import { Close } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModalSelector from "../modalSelector/ModalSelector";
function PDFModal({
  data,
  setModal,
  modal,
  setStudyCollection,
  modalSelectorValue,
  setModalSelectorValue,
}) {
  const [filteredData, setFilteredData] = useState([]);
  const [isBeingFilteredByDate, setIsBeingFilteredByDate] = useState(true);
  const [isDateDescending, setIsDateDescending] = useState(true);
  const [isBeingFilteredByTitle, setIsBeingFilteredByTitle] = useState(false);
  const [isTitleDescending, setIsTitleDescending] = useState(false);

  const handleDateClick = () => {
    setIsBeingFilteredByDate(true);
    setIsBeingFilteredByTitle(false);
    setIsDateDescending(!isDateDescending);
    filterByDate();
  };

  const handleTitleClick = () => {
    return;
    setIsBeingFilteredByTitle(true);
    setIsBeingFilteredByDate(false);
    setIsTitleDescending(!isTitleDescending);
    console.log(isTitleDescending);
    filterByTitle();
  };

  const filterByDate = () => {
    const dataCopy = [...filteredData];
    if (isDateDescending) {
      const descendingOrder = dataCopy.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setFilteredData(descendingOrder);
    } else if (!isDateDescending) {
      const ascendingOrder = dataCopy.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setFilteredData(ascendingOrder);
    }
  };

  const filterByTitle = () => {
    const dataCopy = [...filteredData];
    if (isTitleDescending) {
      const descendingOrder = dataCopy.sort((a, b) => a.title - b.title);
      setFilteredData(descendingOrder);
    } else if (!isTitleDescending) {
      const ascendingOrder = dataCopy.sort((a, b) => b.title - a.title);
      setFilteredData(ascendingOrder);
    }
  };

  // console.log(filteredData.sort((a, b) => a.title.localCompare(b.title)));

  useEffect(() => {
    let newArr = [];
    data.forEach((pdf) => {
      newArr.push({
        title: pdf.title,
        link: pdf.link,
        id: pdf.id,
        date: new Date(pdf.date.seconds * 1000).toISOString().split("T")[0],
      });
    });
    setFilteredData(newArr);
  }, [data]);
  return (
    <div className="modal-container">
      <div className="modal-head-section">
        <div onClick={() => setModal(!modal)} className="close-icon">
          <Close />
        </div>
        <ModalSelector
          setStudyCollection={setStudyCollection}
          setModalSelectorValue={setModalSelectorValue}
          modalSelectorValue={modalSelectorValue}
        />
        <div className="modal-headers">
          <div className="modal-header-container" onClick={handleTitleClick}>
            <h4>Title</h4>
            <div
              className={
                isBeingFilteredByTitle ? "modal-arrow-contianer" : "hidden"
              }
            >
              {isTitleDescending ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </div>
          </div>
          <div className="modal-header-container" onClick={handleDateClick}>
            <h4>Date</h4>
            <div
              className={
                isBeingFilteredByDate ? "modal-arrow-contianer" : "hidden"
              }
            >
              {isDateDescending ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-items">
        {filteredData.map((pdf) => (
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
