import React from 'react';
import SideBar from '../Sidebar';

const Boards = ({ boards, board, getTopic, goToBoard, history }) => {
  return (  
      <SideBar getTopic={getTopic} boards={boards} goToBoard={goToBoard} />
  );
};

export default Boards;


