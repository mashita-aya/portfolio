import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CONSTANTS } from '../constants';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="footer_section">
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <svg viewBox="0 0 100 100">
          <g className="rotating">
            <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
            <text>
              <textPath xlinkHref="#circle">
                IiIiIiIiIiIiIiIiIiIiIiIiIi
              </textPath>
            </text>
          </g>
          <text className="hamburger_title" x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="10">
            Menu
          </text>
          <text className="hamburger_close" x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="10">
            Close
          </text>
        </svg>
      </button>

      <nav className={`side_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link 
              to={CONSTANTS.APP_NAME + '/'}
              className="normal_link"
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
            <a 
              className="mail_link normal_link"
              href="mailto:a.mashita.works@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">contact</h4>
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer_content">
        <h4 className="footer_title contact_title">contact</h4>
        <p className="footer_text">お問い合わせは下記のメールアドレスよりお願いします。</p>
        <a 
          className="mail_link normal_link"
          href="mailto:a.mashita.works@gmail.com">
          <p className="link_mail">a.mashita.works@gmail.com</p>
        </a>
      </div>
      <small className="copyright">All Rights Reserved 2025 ©︎ aya mashita</small>
    </div>
  );
};
