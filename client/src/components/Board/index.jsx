import React from 'react';
import Topics from '../../containers/Board/Topics';
import DropMenu from '../misc/DropMenu';
import { renderBoardMenu } from '../../containers/menuData';
import style from './Board.module.scss';

const Board = ({
  data,
  boardId,
  removeBoard,
  modalHandler,
  modalType,
  history }) => {
  return <div className="container">
    <div className={style.wrapper}>
      <h3>{data.boardTitle}</h3>
      <DropMenu items={renderBoardMenu(removeBoard, modalHandler, boardId, history, modalType)} />
    </div>
    <Topics boardId={boardId} />
  </div>
};

export default Board;

