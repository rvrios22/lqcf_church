import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

export default function Prayer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMLATE_ID,
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
  };

  return (
    <div>
      <h1 className="header">Why Should We Pray?</h1>
      <p className="general-text">
        God commands that we join with other faithful Christians to pray over
        those who are seeking prayer.
      </p>
      <p className="bible-text">
        James 5:14-15, "Is any sick among you? let him call for the elders of
        the church; and let them pray over him, anointing him with oil in the
        name of the Lord: 15 And the prayer of faith shall save the sick, and
        the Lord shall raise him up; and if he have committed sins, they shall
        be forgiven him.”
      </p>

      <div>
        <h2 className="sub-header">Are You In Need of Prayer?</h2>
        <p className="general-text">
          Please fill out our form to send us your prayer request and we will
          pray for you.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name: </label>
          <input id='name'type="text" name="name" placeholder="What's Your Name?" required
            value={name} onChange={(e) => setName(e.target.value)}
          />
          <label>Email: </label>
          <input id='email'type="email" name="email" placeholder="What's Your Email?" 
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message: </label>
          <textarea name="message" placeholder="How Can We Pray For You?" required
            value={message} onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
