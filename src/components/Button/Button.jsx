import React from 'react';
import { Link } from 'react-scroll';
import './Button.css';

const Button = ({ path, children }) => {
  return (
    <Link to={path} className="btn" offset={-80} spy={true} smooth={true}>
      {children}
    </Link>
  );
};

export default Button;
