import React from 'react';
import style from './Boards.module.scss';
import { Link } from 'react-router-dom';

const Boards = ({ boards, addBoard, fetchBoardTitle, boardTitle, sumbitHanlder }) => {
  const list = boards.map(board => <Link key={board._id} to={`/boards/${board._id}`}>{board.boardTitle}</Link>)
  return (
    <div className={style.wrapper}>
      <div>{boardTitle}</div>
      <form onSubmit={sumbitHanlder}>
        <input type="text" value={boardTitle} onChange={(e) => fetchBoardTitle(e.target.value)} />
        <button onClick={() => addBoard()}>add board</button>
      </form>
      {list}
    </div>
  );
};

export default Boards;


