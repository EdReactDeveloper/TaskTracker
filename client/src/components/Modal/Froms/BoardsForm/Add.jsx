import React from 'react';
import style from '../Forms.module.scss'; 

const Add = ({boardTitle, fetchBoardTitle}) => {
  return <input
  type="text" value={boardTitle}
  onChange={(e) => fetchBoardTitle(e.target.value)}
  className={style.input}
/>
};

export default Add;