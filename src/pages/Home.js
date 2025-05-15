import React from 'react';
import { Link } from 'react-router-dom';
import { AboutDigestSection } from './About/AboutDigestSection';
import { WorksDigestSection } from './Works/WorksDigestSection';
import { workList } from '../data/workList';
import { aboutList } from '../data/aboutList';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FadeInSection } from './components/FadeInSection';

export const Home = () => {  
  return (
    <>
    <div className="home">
      <div className="home__slider">
        <Splide options={{ 
          arrows: false,
          pauseOnHover: false,
          autoplay: true,
          interval: 9000,
          speed: 1000,
          pauseOnFocus: false,
          type: 'loop',
          rewind: true,
          pagination: false,
          }}>
          {workList.map((image, index) => (
            <SplideSlide key={index}>
              <img src={`${process.env.PUBLIC_URL}/images/${image.imageName01}`} alt={image.title} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="home__title-area">
        <h2 className="home__main-title" aria-hidden="true" translate="no">
          {"portfolio site".split("").map((char, i) => (
            <span
              className="parts"
              style={{ "--index": i }}
              key={i}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <p className="home__sub-title">mashita aya</p>
        <div className="home__left-decoration">Web Site Design</div>
        <div className="home__right-decoration">Application Design</div>
      </div>
    </div>

    <FadeInSection>
    <div className="home__about">
      <h2 className="home__section-title">about</h2>
      {aboutList.map((about, index) => (
        <AboutDigestSection
          key={index}
          title={about.title}
          subTitle={about.subTitle}
          moreLink={about.link}
        >
            {about.summary}
        </AboutDigestSection>
      ))}
      <div className="home__about-button">
        <Link
          to="/about/content"
          className="button button--normal"
        >
          more
        </Link>
      </div>
    </div>
		</FadeInSection>

    <FadeInSection>
      <div id="works_section" className="home__works">
        <h2 className="home__section-title">works</h2>
        <div className="home__works-list">
          {workList.slice(0, 6).map((work, index) => (
            <WorksDigestSection
              key={index}
              id={work.id}
              title={work.title}
              tag={work.tag}
              imageName={work.imageName01}
              detail={work.detail}
            >
              {work.summary}
            </WorksDigestSection>
          ))}
        </div>
        <div className="home__works-button">
          <Link
            to="/works/content"
            className="button button--normal"
          >
            more
          </Link>
        </div>
      </div>
    </FadeInSection>
  </>
  );
};