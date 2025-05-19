import React from 'react';
import { useParams } from 'react-router-dom';
import { workList } from '../../data/workList';
import IconWindow from '../../images/window_icon.svg';
import { FadeInSection } from '../components/FadeInSection';

export const WorkDetail = () => {
  const { id } = useParams();
  const decodedTitle = decodeURIComponent(id);

  const work = workList.find(item => item.id === decodedTitle);

  if (!work) {
    return <p>作品が見つかりませんでした。</p>;
  }

  return (
    <FadeInSection>
      <div className="work-detail">
        <div className="work-detail__header">
          <h2>
            {work.url ? (
              <a target="_blank" rel="noreferrer" href={work.url}>
                {work.title}
                <div><img src={IconWindow} alt="外部リンク" /></div>
              </a>
            ) : (
              work.title
            )}        
          </h2>
          <p>{work.summary}</p>
        </div>

        <div className="work-detail__container">
          <div className="work-detail__left-contnt">
            <a 
              className="work-detail__image"
              href={`${process.env.PUBLIC_URL}/images/${work.imageNamePc}`}
            >
              <img src={`${process.env.PUBLIC_URL}/images/${work.imageNamePc}`} alt={work.title} />
            </a>
          </div>
          <div className="work-detail__right-content">
            <ul className="work-detail__text-list">
              <li>
                <div className="work-detail__catchcopy">{work.catchCopy}</div>
                <p className="work-detail__purpose">{work.summary}</p>
                {work.detail.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    <p className="work-detail__introduction">
                    {line}
                    </p>
                  </React.Fragment>
                ))}
                <div className="work-detail__detail">
                  <dl>
                    <dt>担当範囲</dt>
                    <dd>{work.responsibleRange}</dd>
                    <dt>Design Tool</dt>
                    <dd>{work.design}</dd>
                    {work.implement && (
                      <>
                        <dt>Implement</dt>
                        <dd>{work.implement}</dd>
                      </>
                    )}
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};