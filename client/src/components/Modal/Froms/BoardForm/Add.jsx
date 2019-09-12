import React from 'react';
import style from '../Forms.module.scss';

const Add = ({ topicTitle, fetchTopicTitle }) => {
  return <input
    type="text"
    className={style.input}
    value={topicTitle}
    onChange={(e) => fetchTopicTitle(e.target.value)}
    name="title"
  />
};

export default Add;