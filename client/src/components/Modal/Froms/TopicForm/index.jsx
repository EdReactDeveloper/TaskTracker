import React from 'react';
import style from '../Forms.module.scss'
import Edit from './Edit';
import Add from './Add';

const TopicForm = ({
  handleSubmit,
  edit,
  item
}) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {edit ?
        <Edit item={item} /> : <Add />
      }
      <button
        type="submit"
        className={style.submit}
      >submit</button>
    </form>
  );
};

export default TopicForm;