import { Link } from 'react-scroll';
import logoIcon from '../images/header_logo.svg';

export const Footer = () => (
  <div className="footer_section">
    <div className="footer_content">
      <div className="footer_logo">
        <img src={logoIcon} alt="logo" />
      </div>
      <ul className="footer_list">
        <li className="footer_list_link">
          <Link to="/home">
            <h4 className="link_title">home</h4>
            <p className="link_text">サイトトップ</p>
          </Link>
        </li>
        <li className="footer_list_link">
          <Link to="/works">
            <h4 className="link_title">works</h4>
            <p className="link_text">これまで制作したもの</p>
          </Link>
        </li>
        <li className="footer_list_link">
          <Link to="/about">
            <h4 className="link_title">about</h4>
            <p className="link_text">私について</p>
          </Link>
        </li>
        <li className="footer_list_link contact_link">
          <Link to="/contact">
            <h4 className="link_title">contact</h4>
            <p className="link_text">a.mashita.works@gmail.com</p>
          </Link>
        </li>
      </ul>
      <small className="copyright">All Rights Reserved 2025 ©︎ trois</small>
    </div>
  </div>
);
