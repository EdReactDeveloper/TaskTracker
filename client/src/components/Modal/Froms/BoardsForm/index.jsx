import React from 'react';
import style from './BoardsFrom.module.scss'; 

const BoardsForm = ({ boardTitle, fetchBoardTitle, addBoard, submitHandler }) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <input type="text" value={boardTitle} onChange={(e) => fetchBoardTitle(e.target.value)} />
      <button type="submit">add board</button>
    </form>
  );
};

export default BoardsForm;