import React from 'react';
import logoIcon from '../../images/header_logo.svg';
import { Link } from 'react-router-dom';

export const Header = ({ setIsOpen }) => {
  const APP_NAME = "portfolio";

  return (
    <header className="header">
      <Link 
        to={APP_NAME + '/'}
        className="header__link"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={() => setIsOpen(false)}
      >
        <h1 className="header__logo">           
          <img src={logoIcon} alt="logo" />
        </h1>
      </Link>
    
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link 
              className="main-nav__link"
              to={APP_NAME + '/'}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              home
            </Link>
          </li>
          <li className="main-nav__item">
            <Link 
              className="main-nav__link"
              to="/about/content"
              onClick={() => setIsOpen(false)}
            >
              about
            </Link>
          </li>
          <li className="main-nav__item">
            <Link 
              className="main-nav__link"
              to="/works/content"
              onClick={() => setIsOpen(false)}
            >
              works
            </Link>
          </li>
          <li className="main-nav__item">
            <a 
              className="main-nav__link"
              href="mailto:a.mashita.works@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
