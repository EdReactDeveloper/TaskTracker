import React from 'react';
import style from './Nav.module.scss';
import DropMenu from '../../containers/DropMenu/DropMenu';

const Nav = ({ history, board, modalHandler }) => {
  return (
    <nav className={style.nav}>
      {board ?
        <>
          <h4>{board.boardTitle}</h4>
          <button onClick={() => modalHandler('boardsModal', board._id)}>edit</button>
        </>
        :
        <h4>select a board</h4>
      }
      <DropMenu history={history} />
    </nav>
  );
};

export default Nav;