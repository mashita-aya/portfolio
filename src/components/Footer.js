import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="footer_section">
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`side_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link 
              to="/home"
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
              to="/about/content"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">about</h4>
            </Link>
          </li>
          <li>
            <Link 
              to="/works/content"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">works</h4>
            </Link>
          </li>
          <li>
            <Link 
              to="section_contact"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">contact</h4>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer_content">
        <h4 className="footer_title contact_title">contact</h4>
        <p className="footer_text">お問い合わせは下記のメールアドレスよりお願いします。</p>
        <Link to="/contact">
          <p className="link_mail">a.mashita.works@gmail.com</p>
        </Link>
      </div>
      <small className="copyright">All Rights Reserved 2025 ©︎ aya mashita</small>
    </div>
  );
};
