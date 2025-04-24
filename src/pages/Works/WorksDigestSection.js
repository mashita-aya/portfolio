import { Link } from 'react-router-dom';
import React from 'react';

export const WorksDigestSection = ({ id, title, tag, imageName}) => {
  return (
    <ul className="works_content">
      <li className="works_list">
        <Link
          className="works_list_link"
          to={`/workdetail/${id}`}
        >     
        <img src={`../../images/${imageName}`} alt={title} />
        <div className="works_list_content">
          <h4 className="works_list_title">{title}</h4>
          <p className="works_list_decoration">{tag}</p>
        </div>
        </Link>
      </li>
    </ul>
  );
};