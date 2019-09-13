import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Button/Button';
import CheckTitle from './CheckTitle';

const ListItem = (props) => {
  const { item, updateListItem, editMode } = props
  return (
    <div className={style.wrapper}>
      {editMode && <Button type='delete' payload={{ item, updateListItem }} />}
      <div className={style.container}>
        <CheckTitle {...props} />
        <div className={style.info_container}>
        </div>

      </div>
    </div>
  );
};

export default ListItem;