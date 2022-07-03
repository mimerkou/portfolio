import React from 'react';
import './Contact.css';

const ContactTest = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <div className="underline contact-underline"></div>

        <p className="website">
          If you have a website or an idea in mind, feel free to contact me, get
          a quick estimate and a plan for making it live.
        </p>

        <p className="reply">Reply time within 1 working day.</p>

        <a href="mailto:mimerkou@gmail.com" className="btn send-btn">
          Let's Work Together
        </a>

        <div className="social-buttons">
          <a
            href="https://github.com/mimerkou"
            target="_blank"
            rel="noreferrer"
            className="contact-social"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/michalis-merkouris-4025847b/"
            target="_blank"
            rel="noreferrer"
            className="contact-social"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/mimerkou"
            target="_blank"
            rel="noreferrer"
            className="contact-social"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/michalis.merkouris/"
            target="_blank"
            rel="noreferrer"
            className="contact-social"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <p className="developer">Designed & Developed by Michalis Merkouris</p>
      </div>
    </section>
  );
};

export default ContactTest;
