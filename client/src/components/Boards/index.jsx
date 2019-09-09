import React from 'react';
import DropMenu from '../misc/DropMenu';
import { renderBoardSMenu } from '../../containers/menuData';
import SideBar from '../Sidebar'; 

const Boards = ({ boards, modalHandler, modalType, getTopic, goToBoard }) => {

  return (
    <div >
      <DropMenu items={renderBoardSMenu(modalHandler, modalType)} />
      <div>
        <SideBar getTopic={getTopic} boards={boards} goToBoard={goToBoard} />
      </div>
    </div>
  );
};

export default Boards;


