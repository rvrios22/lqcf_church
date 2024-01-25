import React, { useState } from "react";
import "./modalSelector.css";

function ModalSelector({
  setStudyCollection,
  modalSelectorValue,
  setModalSelectorValue,
}) {
  const handleSelectChange = (e) => {
    setStudyCollection(e.target.value);
    setModalSelectorValue(e.target.value);
  };
  return (
    <div className="modal-selector">
      <label htmlFor="studies">Study:</label>
      <select
        name="studies"
        id="studies"
        onChange={handleSelectChange}
        value={modalSelectorValue}
      >
        <option value="trinity-men">Trinity</option>
        <option value="attributesOfGod-men">Attributes of God - Men</option>
        <option value="termsAndDefinitions-women">Terms and Definitions</option>
        <option value="attributesOfGod-women">Attributes of God - Women</option>
      </select>
    </div>
  );
}

export default ModalSelector;
