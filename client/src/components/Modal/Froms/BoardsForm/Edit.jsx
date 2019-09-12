import React from 'react';
import style from '../Forms.module.scss'; 

const Edit = ({board, fetchBoardTitleEdit}) => {
  return <input
  type="text"
  value={board.boardTitle}
  onChange={(e) => fetchBoardTitleEdit(e.target.value)}
  className={style.input}
/>
};

export default Edit;