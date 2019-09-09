import React from 'react';
import Topic from '../../containers/Board/Topic';
import DropMenu from '../misc/DropMenu';
import { renderBoardMenu } from '../../containers/menuData';
import style from './Board.module.scss';
import Sidebar from '../Sidebar'; 
const Board = ({
  board,
  boardId,
  removeBoard,
  modalHandler,
  modalType,
  getTopic,
  history }) => {
  return <div className="container">
    <div className={style.wrapper}>
      <h3>{board.boardTitle}</h3>
      <DropMenu items={renderBoardMenu(removeBoard, modalHandler, boardId, history, modalType)} />
    </div>
    <div className={style.contentWrapper}>
    <Sidebar board={board} getTopic={getTopic} />
    <Topic />
    </div>
  </div>
};

export default Board;

