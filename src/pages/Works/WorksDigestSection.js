import { Link } from 'react-router-dom';
import React from 'react';

export const WorksDigestSection = ({ id, title, tag, imageName}) => {
  return (
    <div className="works-section">
      <Link
        className="works-section__link"
        to={`/workdetail/${id}`}
      >     
        <div className="works-section__link-pic">
          <img src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} />
        </div>
        <div className="works-section__content">
          <h4 className="works-section__title">{title}</h4>
          <p className="works-section__decoration">{tag}</p>
        </div>
      </Link>
    </div>
  );
};