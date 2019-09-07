import React from 'react';
import style from './Boards.module.scss';
import DisplayBoard from './DisplayBoard'
import DropMenu from '../misc/DropMenu'; 
import {renderBoardSMenu} from '../../containers/menuData';

const Boards = ({ boards, modalHandler, modalType}) => {

  const listOfBoards = boards.map(board => <DisplayBoard key={board._id} board={board} />)
  return (
    <div className={`${style.wrapper} container`}>
          <DropMenu  items={renderBoardSMenu(modalHandler, modalType)}/>
      {listOfBoards}
    </div>
  );
};

export default Boards;


