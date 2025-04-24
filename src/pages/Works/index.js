import { Link } from 'react-router-dom';
import { WorksDigestSection } from './WorksDigestSection';
import { useLocation } from 'react-router-dom';
import { workList } from '../../data/workList';

export const WorksContent = () => {
  return (
    <div className="works_section section">
      <div className="works_header">
        <h2 className="contact_title">works</h2>
      </div>
        {workList.map((item, index) => (
          <WorksDigestSection
            key={index}
            id={item.id}
            title={item.title}
            tag={item.tag}
            imageName={item.imageNamePc}
          >
          </WorksDigestSection>
        ))}
    </div>
  );
};