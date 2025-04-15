import { Link } from 'react-scroll';
import works_01 from '../images/works_01.png';

export const Works = () => {
  return (
    <div className="works_section">
      <h2 className="works_title contact_title">works</h2>
      <ul className="works_content">
        <li className="works_list">
          <Link className="works_list_link" to="/works_01">
            <div className="works_list_img">
              <img src={works_01} alt="works_01" />
            </div>
            <div className="works_list_content">
              <h4 className="works_list_title">アプリ画面及びシステム管理画面</h4>
              <p className="works_list_decoration">assign task</p>
              <p className="works_list_text">各種システムの画面デザイン及び一部フロント実装を行いました。</p>
            </div>
          </Link>
        </li>
      </ul>
      <Link className="works_button" to="/more">more</Link>
    </div>
  );
};