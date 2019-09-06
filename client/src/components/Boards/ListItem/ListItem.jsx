import React from 'react';
import { Link } from 'react-router-dom';

const BoardListItem = ({board}) => {
  console.log(board)
  return (
    <div>
      <h3><Link to={`/boards/${board._id}`}>{board.boardTitle}</Link></h3> 
      <div>list of topics</div>
    </div>
  );
};

export default BoardListItem;

