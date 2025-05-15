import React from 'react';
import { AboutDigestSection } from './AboutDigestSection';
import { aboutList } from '../../data/aboutList';
import { FadeInSection } from '../components/FadeInSection';

export const AboutContent = () => {
  return (
    <FadeInSection>
      <div className="about-section">
        <div className="about-section__header">
          <h2 className="about-section__title tracking-in-expand">about</h2>
        </div>

        {aboutList.map((about, index) => (
          <React.Fragment key={index}>
            <AboutDigestSection
              title={about.title}
              subTitle={about.subTitle}
              moreLink={about.link}
            >
                {about.summary}
            </AboutDigestSection>

            <div className="about-section__biography">
              <h3 className="about-section__subtitle">biography</h3>
              {about.biography?.map((bio, i) => (
                <dl key={i} className="about-section__biography-list">
                  <dd className="about-section__biography-year">{bio.year}</dd>
                  <dt className="about-section__biography-summary">{bio.summary}</dt>
                </dl>
              ))}
            </div>

            <div className="about-section__skills">
              <h3 className="about-section__subtitle">skill</h3>
              <ul className="about-section__skill-list">
                {about.skill.map((skill, _index) => (
                <li key={_index} className="about-section__skill-item">
                  <div className="about-section__skill-header">
                    <h4 className="about-section__skill-title">{skill.name}</h4>
                    <p className="about-section__skill-category">{skill.category}</p>
                  </div>
                    <p className="about-section__skill-summary">{skill.summary}</p>
                </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
    </FadeInSection>
  );
};