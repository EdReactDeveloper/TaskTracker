import React from 'react';
import style from '../Forms.module.scss';
import Add from './Add';
import Edit from './Edit';

const BoardForm = ({ handleSubmit, edit, topic }) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="title" className={style.heading}>
        topic tiltle
        {edit ?
          < Edit topic={topic} />
          :
          <Add />
        }
      </label>
      <button className={style.submit} type="submit">add topic</button>
    </form>
  );
};

export default BoardForm;