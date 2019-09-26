import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Elements/Button';
import CheckTitle from './CheckTitle';
const ListItem = (props) => {
  const { item, updateListItemAction, editMode } = props
  return (
    <div className={style.wrapper}>
      {editMode && <Button type='delete' payload={{ item, updateListItemAction }} />}
      <div className={style.container}>
        <CheckTitle {...props} />
        <div className={style.info_container}>
        </div>
      </div>
    </div>
  );
};

export default ListItem;