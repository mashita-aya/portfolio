import { Link } from 'react-scroll';
// import portfolioImg from '../images/portfolio.svg';

export const About = () => {
  return (
    <div className="about_section">
      <h2 className="about_title contact_title">about</h2>
      <div className="about_content">
        <div className="about_pic">
          <p className="about_img"></p>
        </div>
        <div className="about_text">
          <h3 className="about_name">真下 彩</h3>
          <div className="about_decoration">mashita aya</div>
          <p className="about_introduction">1994年生まれ。北海道江別市在住。<br/>
            高等学校を卒業後、総務業務やコールセンター職に従事。総務業務時に携わった新事業の広告業務にてWEBデザインの仕事に強く興味を持つことに。2021年2月、WSS札幌へ入学し、PC・スマホデザイン科にて WEBデザインを中心に学びました。<br/>
          </p>
          <p className="about_introduction">
            2025年2月まで、株式会社インプルにてデザイナー兼プログラマーとして従事。</p>
          <Link className="about_button" to="/more">more</Link>
        </div>
      </div>
    </div>
  );
};