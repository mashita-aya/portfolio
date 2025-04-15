import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div className="home_section">
      <h1 className="home_title">IRODORI</h1>
      <p className="home_text">彩りの力と、伝えるデザイン。</p>
      <Link className="home_link" to="/works">works</Link>
    </div>
  );
};