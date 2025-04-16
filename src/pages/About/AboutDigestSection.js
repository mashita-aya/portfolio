import React from 'react';

export const AboutDigestSection = ({ title, subTitle, children, moreLink }) => {

  return (
    <div className="about_content">
      <div className="about_pic">
        <p className="about_img"></p>
      </div>
      <div className="about_text">
        <h3 className="about_name">{title}</h3>
        <div className="about_decoration">{subTitle}</div>
        {children.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};