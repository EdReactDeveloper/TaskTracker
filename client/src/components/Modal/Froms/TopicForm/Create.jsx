import React from 'react';
import style from './TopicForm.module.scss';
const Create = ({
  fetchTopicItemTitle,
  fetchTopicItmeDescription,
  topicItemTitle,   
  topicItemDescription,
}) => {
  return (
    <>
      <label className={style.heading}>title
    <input
          type="text"
          value={topicItemTitle}
          onChange={(e) => fetchTopicItemTitle(e.target.value)}
          className={style.input}
        />
      </label>
      <label className={style.heading}>description
    <textarea
          value={topicItemDescription}
          onChange={(e) => fetchTopicItmeDescription(e.target.value)}
          className={style.textarea}
        />
      </label>
    </>
  );
};

export default Create;