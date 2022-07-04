import React from 'react';
import Button from '../Button/Button';
import foto from '../../assets/foto.jpg';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
  return (
    <section className="about-container" id="about">
      <Fade left>
        <div className="about-text">
          <h2>About Me</h2>
          <div className="underline"></div>
          <p>
            I'm a web developer working for a digital creative agency called{' '}
            <a
              href="https://webdots.gr/"
              target="_blank"
              rel="noreferrer"
              className="webdots"
            >
              WebDots
            </a>{' '}
            and I'm fond of building websites. In addition to full-time work, I
            am striving to become great at front-end development by working on
            several projects. The main technologies I'm working with are: HTML,
            CSS, JavaScript and React.
          </p>
          <br />
          <p>
            I love my job and I enjoy every single project I work on. Feel free
            to have a look at my portfolio and don't hesitate to contact me if
            you think I can be of any service to you or if you just want to get
            social!
          </p>

          <Button path="contact">Say Hello</Button>
        </div>
      </Fade>

      <Fade right>
        <div className="about-image">
          <img src={foto} alt="Michalis Merkouris" />
        </div>
      </Fade>
    </section>
  );
};

export default About;
