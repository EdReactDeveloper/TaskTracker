import React from 'react';
import style from './Topic.module.scss';

const NoTopic = () => {
  return (
    <div className={style.noTopic}>
      <h3 className={style.noTopic_heading}>Select a topic</h3>
    </div>
  );
};

export default NoTopic;