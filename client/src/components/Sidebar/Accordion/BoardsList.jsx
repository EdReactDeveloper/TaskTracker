import React from 'react';
import { Link } from 'react-router-dom';
import style from './Accordion.module.scss'
import TopicsList from './List/TopicsList';

const Boards = ({ getTopic, boards=[], getBoard, topic, board, }) => {
  return (
    <ul className={style.menu}>
      {
        boards.map(itemBoard => (
          <li key={itemBoard._id}>
            <Link to={`/board/${itemBoard._id}`} className={style.itemBoard} onClick={() => getBoard(itemBoard._id)}>
              <div className={`${style.btnAc} ${(board && itemBoard._id === board._id) ? style.board_background : ''}`}> {itemBoard.title}</div>
            </Link>
            <TopicsList getTopic={getTopic} itemBoard={itemBoard} board={board} topic={topic} />
          </li>
        ))}
    </ul>
  );
};

export default Boards;