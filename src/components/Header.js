import React, { useState } from 'react';
import logoIcon from '../images/header_logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header_section">
      <Link 
        to="/"
        className="normal_btn"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={() => setIsOpen(false)}
      >
        <h1 className="top_logo">           
          <img src={logoIcon} alt="logo" />
        </h1>
      </Link>
    
      <nav className="header_inner">
        <ul>
          <li>
            <Link 
              to="/"
              className="normal_btn"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">home</h4>
            </Link>
          </li>
          <li>
            <Link 
              className="normal_btn"
              to="/about/content"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">about</h4>
            </Link>
          </li>
          <li>
            <Link 
              className="normal_btn"
              to="/works/content"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">works</h4>
            </Link>
          </li>
          <li>
            <a 
              className="normal_btn"
              href="mailto:a.mashita.works@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">contact</h4>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
