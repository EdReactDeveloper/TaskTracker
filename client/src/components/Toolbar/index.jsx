import React from 'react';
import style from './Toolbar.module.scss';
import DropMenu from '../../containers/DropMenu/DropMenu';
import Button from '../misc/Elements/Button';
import NoBoard from './NoBoard'

const Toolbar = ({ 
  history, 
  board, 
  modalHandler, 
  editHandler, 
  editMode, 
  boards, 
  loading }) => {
  return (
    <div className={style.nav}>
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
    </div>
  );
};

export default Toolbar;