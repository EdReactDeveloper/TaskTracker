import React from 'react';
import style from './Toolbar.module.scss';
import DropMenu from '../../containers/DropMenu/DropMenu';
import Button from '../misc/Elements/Button';
import NoBoard from './NoBoard'
import {FORM_PAGE} from '../misc/configs'; 

const Toolbar = ({ 
  history, 
  board, 
  editHandler, 
  editMode, 
  boards, 
  loading }) => {
  return (
    <div className={style.nav}>
      {board ?
        <>
          <h4>{board.title}
            {editMode &&
              <Button type='edit' payload={{ formPage: FORM_PAGE.boards, itemId: board._id }} />
            }
          </h4>
          <Button type='editAll' payload={{ editHandler, editMode }} />
        </>
        : <NoBoard boards={boards} loading={loading} board={board}/>
      }
      <DropMenu history={history} />
    </div>
  );
};

export default Toolbar;