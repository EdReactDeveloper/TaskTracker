import React from 'react';
import style from '../Forms.module.scss';
import Add from './Add';
import Edit from './Edit';

const BoardsForm = ({  handleSubmit, edit, ...props }) => {
  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.heading}>
        board name
      {edit ?
          <Edit {...props} />
          :
          <Add />
        }
        <button type="submit" className={style.submit}>add board</button>
      </label>
    </form>
  );
};

export default BoardsForm;