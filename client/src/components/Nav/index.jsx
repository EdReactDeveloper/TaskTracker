import React from 'react';
import style from './Nav.module.scss'; 
import DropMenu from '../../containers/DropMenu'; 

const Nav = ({history, board}) => {
  return (
    <nav className={style.nav}>
      <h4>{board ? board.boardTitle : 'select a board'}</h4>
      <DropMenu history={history}/>
      </nav>
  );
};

export default Nav;