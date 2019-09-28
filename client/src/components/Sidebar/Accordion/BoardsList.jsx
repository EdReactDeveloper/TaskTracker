import React from 'react';
import style from './Accordion.module.scss'
import { Link } from 'react-router-dom';
import TopicsList from './List/TopicsList';

const Boards = ({ getTopic, boards, getBoard, topic, board, }) => {
  return (
    <ul className={style.menu}>
      {
        boards.map(item => (
          <li key={item._id}>
            <Link to={`/boards/${item._id}`} className={style.item} onClick={() => getBoard(item._id)}>
              <div className={`${style.btnAc} ${(board && item._id === board._id) ? style.board_background : ''}`}> {item.title}</div>
            </Link>
            <TopicsList getTopic={getTopic} item={item} board={board} topic={topic} />
          </li>
        ))}
    </ul>
  );
};

export default Boards;