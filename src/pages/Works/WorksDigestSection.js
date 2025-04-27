import { Link } from 'react-router-dom';
import React from 'react';

export const WorksDigestSection = ({ id, title, tag, imageName}) => {
  return (
    <div className="works_content">
      <Link
        className="works_list_link"
        to={`/workdetail/${id}`}
      >     
        <div className="works_list_pic">
          <img src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} />
        </div>
        <div className="works_list_content">
          <h4 className="works_list_title">{title}</h4>
          <p className="works_list_decoration">{tag}</p>
        </div>
      </Link>
    </div>
  );
};