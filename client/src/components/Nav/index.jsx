import React from 'react';
import style from './Nav.module.scss';
import DropMenu from '../../containers/DropMenu/DropMenu';
import Button from '../misc/Button/Button';
const Nav = ({ history, board, modalHandler, editHandler, editMode }) => {
  return (
    <nav className={style.nav}>
      {board ?
        <>
          <h4>{board.boardTitle}
            {editMode &&
              <Button type='edit' payload={{ modalHandler, modalType: 'boardsModal', item: board }} />
            }
          </h4>
          <Button type='editAll' payload={{ editHandler, editMode }} />
        </>
        :
        <h4>select a board</h4>
      }
      <DropMenu history={history} />
    </nav>
  );
};

export default Nav;