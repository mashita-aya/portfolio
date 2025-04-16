import React from 'react';
import { useParams } from 'react-router-dom';
import { workList } from '../../data/workList';

export const WorkDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const work = workList.find(item => item.title === decodedTitle);

  if (!work) {
    return <p>作品が見つかりませんでした。</p>;
  }

  return (
    <div className="work_detail">
      <h2>{work.title}</h2>
      <p><strong>タグ：</strong>{work.tag}</p>
      <p>{work.detail}</p>
    </div>
  );
};