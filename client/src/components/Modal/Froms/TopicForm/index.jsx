import React from 'react';
import style from './TopicForm.module.scss';
import Edit from './Edit';
import Create from './Create';

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
  console.log()
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
        className={style.btn_add}
      >create</button>
    </form>
  );
};

export default TopicForm;