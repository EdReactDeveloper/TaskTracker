import React from 'react';
import Topic from '../../containers/Board/Topic';
import style from './Board.module.scss';
import Sidebar from '../Sidebar'; 
const Board = ({
  board,
  getTopic }) => {
  return <div className="container">
    <div className={style.wrapper}>
      <h3>{board.boardTitle}</h3>
    </div>
    <div className={style.contentWrapper}>
    <Sidebar board={board} getTopic={getTopic} />
    <Topic />
    </div>
  </div>
};

export default Board;

