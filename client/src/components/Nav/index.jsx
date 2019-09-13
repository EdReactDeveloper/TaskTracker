import React from 'react';
import style from './Nav.module.scss';
import DropMenu from '../../containers/DropMenu/DropMenu';
import Button from '../misc/Button/Button';
import NoBoard from './NoBoard'

const Nav = ({ 
  history, 
  board, 
  modalHandler, 
  editHandler, 
  editMode, 
  boards, 
  loading }) => {
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
        : <NoBoard boards={boards} modalHandler={modalHandler} loading={loading} board={board}/>
      }
      <DropMenu history={history} />
    </nav>
  );
};

export default Nav;