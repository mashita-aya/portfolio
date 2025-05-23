import React from 'react';
import about_pic from '../../images/about_pic.svg';

export const AboutDigestSection = ({ title, subTitle, children, moreLink }) => {

  return (
    <div className="about">
      <div className="about__pic">
        <img src={about_pic} alt="profile" />
      </div>
      <div className="about__text">
        <h3 className="about__name">{title}</h3>
        <div className="about__sub-title">{subTitle}</div>
        {children.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            <p className="about__introduction">
              {line}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};