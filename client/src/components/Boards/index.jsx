import React from 'react';
import SideBar from '../Sidebar';

const Boards = ({ boards, getTopic, getBoard }) => {
  return (  
      <SideBar getTopic={getTopic} boards={boards} getBoard={getBoard} />
  );
};

export default Boards;


