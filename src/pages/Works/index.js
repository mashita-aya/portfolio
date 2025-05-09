import { WorksDigestSection } from './WorksDigestSection';
import { workList } from '../../data/workList';
import { FadeInSection } from '../../components/FadeInSection';

export const WorksContent = () => {
  return (
    <FadeInSection>
      <div className="works_section section">
        <div className="works_header">
          <h2 className="contact_title tracking-in-expand">works</h2>
        </div>
        <div className="works_inner">
          {workList.map((item, index) => (
            <WorksDigestSection
              key={index}
              id={item.id}
              title={item.title}
              tag={item.tag}
              imageName={item.imageName01}
            >
            </WorksDigestSection>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};