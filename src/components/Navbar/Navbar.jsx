import React, { useState, useRef } from 'react';
import { Link as LinkScroll, animateScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logoVariant, menuIconVariant } from './NavbarMotion';
import logo from '../../assets/logo.png';

import './Navbar.css';

const Navbar = () => {
  const [iconClicked, setIconClicked] = useState(false);

  const menuElement = useRef(null);
  const buttonElement = useRef(null);

  const toggleIconAndMenu = () => {
    setIconClicked(!iconClicked);
    menuElement.current.classList.toggle('opened');
    buttonElement.current.classList.toggle('opened');
  };

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <motion.div variants={logoVariant} initial="hidden" animate="visible">
            <LinkRouter to="/" className="logo" onClick={toggleHome}>
              <img src={logo} alt="Logo" />
            </LinkRouter>
          </motion.div>

          <motion.div
            className="menu-icon"
            variants={menuIconVariant}
            initial="hidden"
            animate="visible"
          >
            <button
              type="button"
              className="button icon-button menu-toggle-button"
              onClick={toggleIconAndMenu}
              ref={buttonElement}
            >
              {iconClicked ? (
                <i className="fa-solid fa-xmark close-icon"></i>
              ) : (
                <i className="fa-solid fa-bars open-icon"></i>
              )}
            </button>
          </motion.div>

          <div className="menu" ref={menuElement}>
            <ul className="list">
              <li className="list-item">
                <LinkScroll
                  to="home"
                  className="list-link"
                  // activeClass="active"
                  offset={-80}
                  spy={true}
                  smooth={true}
                  onClick={toggleIconAndMenu}
                >
                  Home
                </LinkScroll>
              </li>
              <li className="list-item">
                <LinkScroll
                  to="about"
                  className="list-link"
                  // activeClass="active"
                  offset={-80}
                  spy={true}
                  smooth={true}
                  onClick={toggleIconAndMenu}
                >
                  About
                </LinkScroll>
              </li>
              <li className="list-item">
                <LinkScroll
                  to="projects"
                  className="list-link"
                  // activeClass="active"
                  offset={-80}
                  spy={true}
                  smooth={true}
                  onClick={toggleIconAndMenu}
                >
                  Projects
                </LinkScroll>
              </li>
              <li className="list-item">
                <LinkScroll
                  to="contact"
                  className="list-link"
                  // activeClass="active"
                  offset={-80}
                  spy={true}
                  smooth={true}
                  onClick={toggleIconAndMenu}
                >
                  Contact
                </LinkScroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
