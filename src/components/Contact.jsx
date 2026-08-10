

import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (name.trim() === "") {
      setError("Please write your name.");
      return;
    }
    if (email.includes("@") === false || email.includes(".") === false) {
      setError("That email does not look right.");
      return;
    }
    if (message.trim().length < 10) {
      setError("Please write at least 10 letters in the message.");
      return;
    }
    setError("");
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-sub">
        Questions, feedback or a bulk order? Write to us.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-line">
            <span className="contact-label">Address</span>
            <span className="contact-value">
              2nd Floor, Ashoka Plaza, MG Road, Pune 411001
            </span>
          </div>
          <div className="contact-line">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+91 98765 43210</span>
          </div>
          <div className="contact-line">
            <span className="contact-label">Email</span>
            <span className="contact-value">hello@foodiehub.in</span>
          </div>
          <div className="contact-line">
            <span className="contact-label">Open</span>
            <span className="contact-value">Every day, 10 am to 11 pm</span>
          </div>
        </div>

        <form className="contact-form">
          <label className="field-label" htmlFor="name">Your name</label>
          <input
            className="field-input"
            id="name"
            type="text"
            placeholder="Rahul Sharma"
            value={name}
            onChange={function (event) {
              setName(event.target.value);
            }}
          />

          <label className="field-label" htmlFor="email">Your email</label>
          <input
            className="field-input"
            id="email"
            type="email"
            placeholder="rahul@example.com"
            value={email}
            onChange={function (event) {
              setEmail(event.target.value);
            }}
          />

          <label className="field-label" htmlFor="message">Message</label>
          <textarea
            className="field-input field-area"
            id="message"
            rows="4"
            placeholder="Tell us what you need"
            value={message}
            onChange={function (event) {
              setMessage(event.target.value);
            }}
          ></textarea>

          {error !== "" && <p className="form-error">{error}</p>}
          {sent === true && (
            <p className="form-success">Thank you. We will reply within a day.</p>
          )}

          <button
            className="btn btn-primary contact-submit"
            type="button"
            onClick={handleSend}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;