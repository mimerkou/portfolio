import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import './Contact.css';

const ContactTest = () => {
  // const socialButtonsVariant = {
  //   hidden: {
  //     y: 20,
  //     opacity: 0,
  //   },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       delay: 1,
  //       when: 'beforeChildren',
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const socialButtonsChildrenVariant = {
  //   hidden: {
  //     y: 20,
  //     opacity: 0,
  //   },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  // };

  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start('visible');
  //   } else {
  //     control.start('hidden');
  //   }
  // }, [control, inView]);

  return (
    <section className="contact-container" id="contact">
      <div className="contact-info">
        <Zoom>
          <h2>Get In Touch</h2>
          <div className="underline contact-underline"></div>
        </Zoom>

        <Zoom delay={250}>
          <p className="full-time-occupied">
            Although I am full-time occupied, I never miss a chance to work on
            an interesting project.
          </p>

          <p className="website">
            If you have a website or an idea in mind, feel free to contact me,
            get a quick estimate and a plan for making it live.
          </p>

          <p className="reply">Reply time within 1 working day.</p>
        </Zoom>

        <Zoom delay={500}>
          <a href="mailto:mimerkou@gmail.com" className="btn send-btn">
            Let's Work Together
          </a>
        </Zoom>

        <div
          className="social-buttons"
          // ref={ref}
          // variants={socialButtonsVariant}
          // animate={control}
          // initial="hidden"
        >
          <Fade bottom delay={750}>
            <a
              href="https://github.com/mimerkou"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              // variants={socialButtonsChildrenVariant}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </Fade>

          <Fade bottom delay={1000}>
            <a
              href="https://www.linkedin.com/in/michalis-merkouris-4025847b/"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              // variants={socialButtonsChildrenVariant}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Fade>

          <Fade bottom delay={1250}>
            <a
              href="https://twitter.com/mimerkou"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              // variants={socialButtonsChildrenVariant}
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Fade>

          <Fade bottom delay={1500}>
            <a
              href="https://www.instagram.com/michalis.merkouris/"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              // variants={socialButtonsChildrenVariant}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </Fade>
        </div>

        <p className="developer">Designed & Developed by Michalis Merkouris</p>
      </div>
    </section>
  );
};

export default ContactTest;
