import React from 'react';
import style from '../Forms.module.scss';
import Add from './Add';
import Edit from './Edit';

const BoardsForm = ({ boardTitle, fetchBoardTitle, fetchBoardTitleEdit, submitHandler, edit, board }) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <label className={style.heading}>
        board name
      {edit ?
          <Edit board={board} fetchBoardTitleEdit={fetchBoardTitleEdit} />
          :
          <Add boardTitle={boardTitle} fetchBoardTitle={fetchBoardTitle} />
        }
        <button type="submit" className={style.submit}>add board</button>
      </label>
    </form>
  );
};

export default BoardsForm;