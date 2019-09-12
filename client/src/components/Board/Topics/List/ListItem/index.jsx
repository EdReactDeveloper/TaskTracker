import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Button/Button';
import CheckTitle from './CheckTitle';

const ListItem = ({
  item,
  editMode,
  updateListItem,
  modalHandler
}) => {
  return (
    <div className={style.wrapper}>
      {editMode && <Button type='delete' payload={{ item, updateListItem }} />}
      <div className={style.container}>
        <CheckTitle item={item} updateListItem={updateListItem} editMode={editMode} modalHandler={modalHandler}/>
        <div className={style.info_container}>
        </div>
        
      </div>
    </div>
  );
};

export default ListItem;