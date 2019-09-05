import React from 'react';
import Topics from '../../../containers/Board/Topics';
import DropMenu from '../../misc/DropMenu';
import Modal from '../../misc/Modal/Modal';
import { renderBoardMenu } from '../../../containers/menuData';
import BoardMenu from './BoardMenu';
import style from './Board.module.scss';

const Board = ({
  data,
  boardId,
  submitHandler,
  topicTitle,
  fetchTopicTitle,
  removeBoard,
  modalHandler,
  modal,
  modalType,
  history }) => {
  return <div className="container">
    <div className={style.wrapper}>
    <h3>{data.boardTitle}</h3>
    <DropMenu items={renderBoardMenu(removeBoard, modalHandler, boardId, history, modalType)} />
    </div>
    {modal &&
      <Modal modalHandler={modalHandler} modalType={modalType}>
        <BoardMenu submitHandler={submitHandler} topicTitle={topicTitle} fetchTopicTitle={fetchTopicTitle} />
      </Modal>  
    }
    <Topics boardId={boardId}/>
  </div>
};

export default Board;

