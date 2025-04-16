import { Link } from 'react-router-dom';
import { AboutDigestSection } from './About/AboutDigestSection';
import { WorksDigestSection } from './Works/WorksDigestSection';
import { useNavigate } from 'react-router-dom';
import { workList } from '../data/workList';
import { aboutList } from '../data/aboutList';
import { useParams } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="home_section" className="home_section">
        <h1 className="home_title">IRODORI</h1>
        <p className="home_text">彩りの力と、伝えるデザイン。</p>
        <Link className="home_link" to="/works">works</Link>
      </div>

      <div className="about_section">
        <h2 className="about_title contact_title">about</h2>
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
        <div className="about_button">
          <Link
            to="/about/content"
            className="about_link"
          >
            more
          </Link>
        </div>
      </div>

      <div className="works_section">
        <h2 className="works_title contact_title">works</h2>
        {workList.map((work, index) => (
          <WorksDigestSection
            key={index}
            title={work.title}
            tag={work.tag}
            detail={work.detail}
          >
            {work.summary}
          </WorksDigestSection>
        ))}
        <Link
          to="/works/content"
          className="works_button"
        >
          more
        </Link>
      </div>
    </>
  );
};