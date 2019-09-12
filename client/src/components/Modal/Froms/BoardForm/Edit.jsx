import React from 'react';
import style from '../Forms.module.scss';

const Edit = ({ topic, fetchTopicTitleEdit }) => {
  return <input
    type="text"
    className={style.input}
    value={topic.title}
    onChange={(e) => fetchTopicTitleEdit(e.target.value)}
    name="title"
  />
};

export default Edit;