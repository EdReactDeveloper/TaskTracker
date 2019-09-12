import React from 'react';
import style from '../Forms.module.scss';
import Add from './Add';
import Edit from './Edit';

const BoardForm = ({ topicTitle, fetchTopicTitle, submitHandler, edit, topic, fetchTopicTitleEdit }) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <label htmlFor="title" className={style.heading}>
        topic tiltle
        {edit ?
          < Edit topic={topic} fetchTopicTitleEdit={fetchTopicTitleEdit} />
          :
          <Add topicTitle={topicTitle} fetchTopicTitle={fetchTopicTitle} />
        }
      </label>
      <button className={style.submit} type="submit">add topic</button>
    </form>
  );
};

export default BoardForm;