import React from 'react';
import style from '../Forms.module.scss';
import Add from './Add';
import Edit from './Edit';

const BoardsForm = ({  handleSubmit, edit, board }) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.heading}>
        board name
      {edit ?
          <Edit board={board} />
          :
          <Add />
        }
        <button type="submit" className={style.submit}>add board</button>
      </label>
    </form>
  );
};

export default BoardsForm;