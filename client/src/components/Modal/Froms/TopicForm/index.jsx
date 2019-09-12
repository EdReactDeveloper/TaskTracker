import React from 'react';
import style from '../Forms.module.scss'
import Edit from './Edit';
import Create from './Add';

const TopicForm = ({
  submitHandler,
  fetchTopicItemTitle,
  fetchTopicItmeDescription,
  topicItemTitle,
  topicItemDescription,
  fetchListItemTitleEdit,
  edit,
  item
}) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      {edit ?
        <Edit
          fetchListItemTitleEdit={fetchListItemTitleEdit}
          item={item}
        />
        :
        <Create
          fetchTopicItemTitle={fetchTopicItemTitle}
          fetchTopicItmeDescription={fetchTopicItmeDescription}
          topicItemTitle={topicItemTitle}
          topicItemDescription={topicItemDescription}
        />
      }
      <button
        type="submit"
        className={style.submit}
      >submit</button>
    </form>
  );
};

export default TopicForm;