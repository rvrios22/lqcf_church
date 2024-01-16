import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./prayerForm.css";

function PrayerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 4000,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Toast.fire({
      title:
        "Thank you for your request. We will keep you in prayer and reach out if we see fit. God bless!",
      background: "#F5F6F7",
      color: "black",
    });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className="prayer-label">Name</label>
      <input
        className="prayer-input"
        id="name"
        type="text"
        name="user_name"
        placeholder="What's Your Name?"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="prayer-label">Email</label>
      <input
        className="prayer-input"
        id="email"
        type="email"
        name="user_email"
        placeholder="What's Your Email?"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="prayer-label">Prayer Request</label>
      <textarea
        className="prayer-input"
        name="message"
        placeholder="How Can We Pray For You?"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="prayer-input" type="submit">
        Send
      </button>
    </form>
  );
}

export default PrayerForm;
