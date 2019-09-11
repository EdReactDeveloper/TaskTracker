import React from 'react';
import style from './BoardForm.module.scss';

const BoardForm = ({ topicTitle, fetchTopicTitle, submitHandler, edit, topic, fetchTopicTitleEdit }) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <label htmlFor="title" className={style.title}>
        topic tiltle
        {edit ?
          <input
            type="text"
            className={style.input}
            value={topic.title}
            onChange={(e) => fetchTopicTitleEdit(e.target.value)} 
            name="title"
            />
          :
          <input
            type="text"
            className={style.input}
            value={topicTitle}
            onChange={(e) => fetchTopicTitle(e.target.value)}
            name="title"
          />
        }
      </label>
      <button className={style.btn_add} type="submit">add topic</button>
    </form>
  );
};

export default BoardForm;