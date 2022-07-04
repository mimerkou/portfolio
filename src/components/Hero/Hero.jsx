import React from 'react';
import { motion } from 'framer-motion';
import {
  homeHeaderVariant,
  homeHeaderChildrenVariant,
  homeTextVariant,
  homeContactVariant,
  homeContactChildrenVariant,
} from './HeroMotion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="home-container" id="home">
      <motion.div
        className="home-header"
        variants={homeHeaderVariant}
        animate="visible"
        initial="hidden"
      >
        <motion.h3 className="name-is" variants={homeHeaderChildrenVariant}>
          Hey, my name is
        </motion.h3>
        <motion.h2 className="michalis" variants={homeHeaderChildrenVariant}>
          Michalis Merkouris
        </motion.h2>
        <motion.h3 className="front-end" variants={homeHeaderChildrenVariant}>
          Front-End Web Developer
        </motion.h3>
      </motion.div>

      <motion.div
        className="home-text"
        variants={homeTextVariant}
        animate="visible"
        initial="hidden"
      >
        <p>
          Hello! I'm Michalis, a front-end web developer based in Athens,
          Greece. Developing and creating beautiful user interfaces is my
          passion. I specialize in React custom websites.
        </p>
      </motion.div>

      <motion.div
        className="home-contact"
        variants={homeContactVariant}
        animate="visible"
        initial="hidden"
      >
        <motion.a
          href="https://github.com/mimerkou"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          variants={homeContactChildrenVariant}
        >
          <i className="fa-brands fa-github"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/michalis-merkouris-4025847b/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          variants={homeContactChildrenVariant}
        >
          <i className="fa-brands fa-linkedin"></i>
        </motion.a>
        <motion.a
          href="https://twitter.com/mimerkou"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          variants={homeContactChildrenVariant}
        >
          <i className="fa-brands fa-twitter"></i>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/michalis.merkouris/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          variants={homeContactChildrenVariant}
        >
          <i className="fa-brands fa-instagram"></i>
        </motion.a>
        <motion.a
          href="mailto:mimerkou@gmail.com"
          className="social-btn"
          variants={homeContactChildrenVariant}
        >
          <i className="fa-solid fa-envelope"></i>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
