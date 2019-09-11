import React from 'react';
import style from './BoardsFrom.module.scss';

const BoardsForm = ({ boardTitle, fetchBoardTitle, fetchBoardTitleEdit, submitHandler, edit, board }) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      {edit ?
        <input type="text" value={board.boardTitle} onChange={(e) => fetchBoardTitleEdit(e.target.value)} />
        :
        <input type="text" value={boardTitle} onChange={(e) => fetchBoardTitle(e.target.value)} />
      }
      <button type="submit">add board</button>
    </form>
  );
};

export default BoardsForm;