import { Link } from 'react-router-dom';
import { WorksDigestSection } from './WorksDigestSection';
import { useLocation } from 'react-router-dom';
import { workList } from '../../data/workList';

export const WorksContent = () => {
  return (
    <div className="works_section">
      <h2 className="works_title contact_title">works<span>−これまで制作したもの</span></h2>
        {workList.map((item, index) => (
          <WorksDigestSection
            key={index}
            title={item.title}
            tag={item.tag}
            moreLink={item.link}
          >
          {item.summary} 
          </WorksDigestSection>
        ))}
    </div>
  );
};