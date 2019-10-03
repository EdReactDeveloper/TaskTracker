import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Elements/Button';
import CheckTitle from './CheckTitle';

const ListItem = (props) => {
  const { item, editMode } = props
  return (
    <div className={style.wrapper}>
      {editMode && <Button type='delete' payload={{ item }} />}
      <div className={style.container}>
        <CheckTitle {...props} />
        <div className={style.info_container} />
      </div>
    </div>
  );
};

export default ListItem;