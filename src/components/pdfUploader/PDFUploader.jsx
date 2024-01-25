import React, { useState, useRef } from "react";
import { storage, db } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import "./pdfUploader.css";
function PDFUploader() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState("");
  const [study, setStudy] = useState("Attributes of God - Men");
  const [fileDirectory, setFileDirectory] = useState("menPDF/");
  const [firebaseCollection, setFirebaseCollection] = useState(
    "attributesOfGod-men"
  );
  const uploadRef = useRef(null);

  const handleUploadRefReset = () => {
    if (uploadRef.current) {
      uploadRef.current.value = "";
      uploadRef.current.type = "text";
      uploadRef.current.type = "file";
    }
  };

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

  const handleAddPDFToCollection = async (url) => {
    const collectionRef = collection(db, firebaseCollection);
    try {
      await addDoc(collectionRef, {
        title: title,
        date: date,
        link: url,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setDate(new Date());
      setTitle("");
      handleUploadRefReset();
    }
  };

  const studySwitchCheck = (study) => {
    switch (study) {
      case "Attributes of God - Men":
        setFileDirectory("menPDF/");
        setFirebaseCollection("attributesOfGod-men");
        break;
      case "Trinity":
        setFileDirectory("trinity-men/");
        setFirebaseCollection("trinity-men");
        break;
      case "Attributes of God - Women":
        setFileDirectory("/attributesOfGod-women");
        setFirebaseCollection("attributesOfGod-women");
        break;
      case "Terms and Definitions":
        setFileDirectory("womenPDF/");
        setFirebaseCollection("termsAndDefinitions-women");
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
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          handleAddPDFToCollection(url);
        });
      }
    );
  };
  return (
    <div className="pdf-uploader-container">
      <div className="pdf-flex-container">
        <div>
          <label htmlFor="studies">Studies:</label>
          <select
            name="studies"
            id="studies"
            onChange={handleStudyChange}
            value={study}
          >
            <option value="Attributes of God - Men">
              Attributes of God - Men
            </option>
            <option value="Trinity">Trinity</option>
            <option value="Attributes of God - Women">
              Attributes of God - Women
            </option>
            <option value="Terms and Definitions">Terms and Definitions</option>
          </select>
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="date">When did we study this?</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date.toISOString().split("T")[0]}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        ref={uploadRef}
      />
      <input type="submit" onClick={handleUpload} />
    </div>
  );
}

export default PDFUploader;
