import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

export default function Prayer() {
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
      <h2>Why Should We Pray?</h2>
      <p>
        God commands that we join with other faithful Christians to pray over
        those who are seeking prayer.
      </p>
      <p>
        James 5:14-15, "Is any sick among you? let him call for the elders of
        the church; and let them pray over him, anointing him with oil in the
        name of the Lord: 15 And the prayer of faith shall save the sick, and
        the Lord shall raise him up; and if he have committed sins, they shall
        be forgiven him.”
      </p>

      <div>
        <h3>Are You In Need of Prayer?</h3>
        <p>
          Please fill out our form to send us your prayer request and we will
          pray for you.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
