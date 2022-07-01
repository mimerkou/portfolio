import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';

import './Navbar.css';

const Navbar = ({ toggle }) => {
  const menuToggleButton = document.querySelector('.menu-toggle-button');
  const menuElement = document.querySelector('.menu');

  const toggleMenu = () => {
    menuElement.classList.toggle('opened');
    menuToggleButton.classList.toggle('opened');
  };

  return (
    <header class="header">
      <nav className="navbar container">
        <Link to="home" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="navbar-button">
          <button
            type="button"
            className="button icon-button menu-toggle-button"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars open-icon"></i>
            <i className="fa-solid fa-xmark close-icon"></i>
          </button>
        </div>

        <div className="menu">
          <ul className="list">
            <li className="list-item">
              <Link
                to="home"
                className="list-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="about"
                className="list-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                About
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="projects"
                className="list-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Projects
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="contact"
                className="list-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
