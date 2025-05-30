import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CONSTANTS } from '../../constants';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="footer">
      <button 
        className={`footer__menu-btn footer__menu-btn--${isOpen ? 'open' : 'closed'}`}
        onClick={toggleMenu}
      >
        <svg viewBox="0 0 100 100" className="footer__menu-icon">
          <g className="footer__menu-icon__rotating">
          <path
            d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            id="footer__circle"/>
            <text>
              <textPath xlinkHref="#footer__circle">
                IiIiIiIiIiIiIiIiIiIiIiIiIi
              </textPath>
            </text>
          </g>
          <text
            className={`footer__menu-text footer__menu-text--title footer__menu-text--${isOpen ? 'hidden' : 'visible'}`}
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
          >
            Menu
          </text>
          <text
            className={`footer__menu-text footer__menu-text--close footer__menu-text--${!isOpen ? 'hidden' : 'visible'}`}
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
          >
            Close
          </text>
        </svg>
      </button>

      <nav className={`footer__sub-nav footer__sub-nav--${isOpen ? 'open' : ''}`}>
        <ul className="footer__sub-nav__list">
          <li className="footer__sub-nav__item">
            <Link 
              className="footer__sub-nav__link"
              to={CONSTANTS.APP_NAME + '/'}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              <span>home</span>
            </Link>
          </li>
          <li className="footer__sub-nav__item">
            <Link
              className="footer__sub-nav__link"
              to="/about/content"
              onClick={() => setIsOpen(false)}
            >
              <span>about</span>
            </Link>
          </li>
          <li className="footer__sub-nav__item">
            <Link 
              className="footer__sub-nav__link"
              to="/works/content"
              onClick={() => setIsOpen(false)}
            >
              <span>works</span>
            </Link>
          </li>
          <li className="footer__sub-nav__item">
            <a 
              className="footer__sub-nav__link"
              href="mailto:a.mashita.works@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              <span>contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="footer__content">
        <h4 className="footer__title">contact</h4>
        <p className="footer__text">お問い合わせは下記のメールアドレスよりお願いします。</p>
        <a 
          className="footer__mail-link"
          href="mailto:a.mashita.works@gmail.com">
            <p  className="footer__mail-addr">a.mashita.works@gmail.com</p>
        </a>
      </div>
      <small className="footer__copyright">All Rights Reserved 2025 ©︎ aya mashita</small>
    </div>
  );
};
