import React, { useState } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./pdfUploader.css";
function PDFUploader() {
  const [study, setStudy] = useState("Attributes of God - Men");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState("");
  const [fileDirectory, setFileDirectory] = useState("menPDF/");

  const handleStudyChange = (e) => {
    const study = e.target.value;
    setStudy(study);
    studySwitchCheck(study);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const studySwitchCheck = (study) => {
    switch (study) {
      case "Attributes of God - Men":
        setFileDirectory("menPDF/");
        break;
      case "Trinity":
        setFileDirectory("trinity-men/");
        break;
      case "Attributes of God - Women":
        setFileDirectory("/attributesOfGod-women");
        break;
      case "Terms and Definitions":
        setFileDirectory("womenPDF/");
        break;
      default:
        "invalid selection";
    }
  };

  const handleUpload = () => {
    const pdfRef = ref(storage, `${fileDirectory}/${file.name}`);
    const uploadTask = uploadBytesResumable(pdfRef, file);
    if (!title || !file) {
      alert("You must fill out all fields");
      return;
    }
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + "% done");
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };
  return (
    <div className="pdf-uploader-container">
      <label htmlFor="studies">Studies:</label>
      <select
        name="studies"
        id="studies"
        onChange={handleStudyChange}
        value={study}
      >
        <option value="Attributes of God - Men">Attributes of God - Men</option>
        <option value="Trinity">Trinity</option>
        <option value="Attributes of God - Women">
          Attributes of God - Women
        </option>
        <option value="Terms and Definitions">Terms and Definitions</option>
      </select>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={handleTitleChange}
        value={title}
      />
      <label htmlFor="date">When did we study this?</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date.toISOString().split("T")[0]}
        onChange={handleDateChange}
      />
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <input type="submit" onClick={handleUpload} />
    </div>
  );
}

export default PDFUploader;
