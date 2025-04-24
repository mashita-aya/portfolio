import React from 'react';
import about_pic from '../../images/about_pic.svg';

export const AboutDigestSection = ({ title, subTitle, children, moreLink }) => {

  return (
    <div className="about_content">
      <div className="about_pic">
        <img src={about_pic} alt="profile" />
      </div>
      <div className="about_text">
        <h3 className="about_name">{title}</h3>
        <div className="about_decoration">{subTitle}</div>
        {children.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            <p className="about_introduction">
              {line}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};