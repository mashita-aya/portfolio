import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import works_01 from '../../images/works_01.png';

export const WorksDigestSection = ({ title, tag, children, moreLink, detail}) => {
  const navigate = useNavigate();
 
  return (
    <ul className="works_content">
      <li className="works_list">
        <Link
          className="works_list_link"
          to={`/workdetail/${encodeURIComponent(title)}`}
        >
          <div className="works_list_img">
            <img src={works_01} alt="works_01" />
          </div>
          <div className="works_list_content">
            <h4 className="works_list_title">{title}</h4>
            <p className="works_list_decoration">{tag}</p>
            <p className="works_list_text">{children}</p>
          </div>
        </Link>
      </li>
    </ul>
  );
};