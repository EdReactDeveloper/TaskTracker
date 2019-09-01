import React from 'react';
import Board from './Board';
import style from './Boards.module.scss';

const Boards = ({ boards }) => {

  const list = boards.map(board => <Board key={board._id} data={board} />)
  return (
    <div className={style.wrapper}>
      {list}
    </div>
  );
};

export default Boards;


