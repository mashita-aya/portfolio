import { WorksDigestSection } from './WorksDigestSection';
import { workList } from '../../data/workList';
import { FadeInSection } from '../components/FadeInSection';

export const WorksContent = () => {
  return (
    <FadeInSection>
      <div className="works">
        <div className="works__header">
          <h2 className="works-section__title tracking-in-expand">works</h2>
        </div>
        <div className="works__inner">
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