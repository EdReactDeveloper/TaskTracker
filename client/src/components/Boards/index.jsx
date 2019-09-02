import React from 'react';
import style from './Boards.module.scss';
import {Link} from 'react-router-dom'; 

const Boards = ({ boards }) => {
console.log(boards)
  const list = boards.map(board => <Link key={board._id} to={`/boards/${board._id}`}>{board.boardTitle}</Link>)
  return (
    <div className={style.wrapper}>
      {list}
    </div>
  );
};

export default Boards;


