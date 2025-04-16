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
        smooth={true}
        duration={500}
        offset={-50}
        onClick={() => setIsOpen(false)}
      >
        <h1 className="top_logo">           
          <img src={logoIcon} alt="logo" />
        </h1>
      </Link>
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`side_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link 
              to="section_home"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">home</h4>
              <p className="link_text">サイトトップ</p>            
            </Link>
          </li>
        </ul>
      </nav>
      </header>
  );
};
