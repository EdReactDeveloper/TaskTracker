import React from 'react';
import Topic from '../../containers/Board/Topic';
import style from './Board.module.scss';
import Sidebar from '../Sidebar';

const Board = ({
  board,
  getTopic 
}) => {
  return <div className={style.contentWrapper}>
    <Sidebar board={board} getTopic={getTopic} />
    <Topic />
  </div>

};

export default Board;

