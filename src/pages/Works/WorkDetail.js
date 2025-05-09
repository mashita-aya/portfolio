import React from 'react';
import { useParams } from 'react-router-dom';
import { workList } from '../../data/workList';
import IconWindow from '../../images/window_icon.svg';
import { FadeInSection } from '../../components/FadeInSection';

export const WorkDetail = () => {
  const { id } = useParams();
  const decodedTitle = decodeURIComponent(id);

  const work = workList.find(item => item.id === decodedTitle);

  if (!work) {
    return <p>作品が見つかりませんでした。</p>;
  }

  return (
    <FadeInSection>
      <div className="work_detail_section">
        <div className="work_detail_header">
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

        <div className="work_detail_container">
          <div className="left_contnt">
            <div className="sp_img">
              <img src={`${process.env.PUBLIC_URL}/images/${work.imageName01}`} alt={work.title} />
            </div>
            <div className="pc_img">
              <a 
                className={work.imageNameSc ? '' : 'full_width'}
                href={`${process.env.PUBLIC_URL}/images/${work.imageNamePc}`}
              >
                <img src={`${process.env.PUBLIC_URL}/images/${work.imageNamePc}`} alt={work.title} />
              </a>
              {work.imageNameSc && (
                <a href={`${process.env.PUBLIC_URL}/images/${work.imageNameSc}`}>
                  <img src={`${process.env.PUBLIC_URL}/images/${work.imageNameSc}`} alt={work.title} />
                </a>
              )}
            </div>
          </div>
          <div className="right_contnt">
            <ul className="basic-text-inner">
              <li>
                <div className="catchCopy">{work.catchCopy}</div>
                <p className="purpose">{work.summary}</p>
                {work.detail.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    <p className="works_introduction">
                    {line}
                    </p>
                  </React.Fragment>
                ))}
                <div className="detail">
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
              <li>
                <div className={work.imageNameSc ? 'sp_img' : 'sp_img full_width'}>
                  <img src={`${process.env.PUBLIC_URL}/images/${work.imageNamePc}`} alt={work.title} />
                  {work.imageNameSc && (
                    <img src={`${process.env.PUBLIC_URL}/images/${work.imageNameSc}`} alt={work.title} />
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};