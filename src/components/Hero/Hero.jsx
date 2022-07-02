import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="home-container" id="home">
      <div className="home-header">
        <h3 className="name-is">Hey, my name is</h3>
        <h2 className="michalis">Michalis Merkouris</h2>
        <h3 className="front-end">Front-End Web Developer</h3>
      </div>

      <div className="home-text">
        <p>
          Hello! I'm Michalis, a front-end web developer based in Athens,
          Greece. Developing and creating beautiful user interfaces is my
          passion. I specialize in React custom websites.
        </p>
      </div>

      <div className="home-contact">
        <a
          href="https://github.com/mimerkou"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/michalis-merkouris-4025847b/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/mimerkou"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/michalis.merkouris/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:mimerkou@gmail.com" className="social-btn">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
