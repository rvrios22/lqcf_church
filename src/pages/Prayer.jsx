import React, { useState, useRef } from "react";

import Swal from 'sweetalert2'

import emailjs from "@emailjs/browser";

import "../css/prayer.css";

export default function Prayer() {
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
      title: 'Thank you for your request. We will keep you in prayer and reach out if we see fit. God bless!',
      background: '#F5F6F7',
      color: 'black'
    })

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1 className="header">Why Should We Pray?</h1>
      <div className="general-container">
        <p className="general-text">
          God commands that we join with other faithful Christians to pray over
          those who are seeking prayer.
        </p>
        <p className="bible-text">
          "Is any sick among you? Let him call for the elders of the church; and
          let them pray over him, anointing him with oil in the name of the
          Lord: And the prayer of faith shall save the sick, and the Lord shall
          raise him up; and if he have committed sins, they shall be forgiven
          him.”
        </p>
        <p className="general-text">James 5:14-15</p>
        <div>
          <h3 className="sub-header">Are You In Need of Prayer?</h3>
          <p className="general-text">
            Please fill out our form to send us your prayer request and we will
            pray for you.
          </p>
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
        </div>
      </div>
    </div>
  );
}
