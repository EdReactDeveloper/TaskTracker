import React from 'react';
import SideBar from '../Sidebar';
import Dropdown from '../../containers/DropDown'
const Boards = ({ boards, getTopic, goToBoard, history }) => {

  return (
    <div >
      <Dropdown history={history}/>
      <SideBar getTopic={getTopic} boards={boards} goToBoard={goToBoard} />
    </div>
  );
};

export default Boards;


