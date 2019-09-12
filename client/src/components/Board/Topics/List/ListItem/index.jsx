import React from 'react';
import style from './ListItem.module.scss';
import { Edit, Remove, Info } from '../../../../misc/Button/Button';
import CheckTitle from './CheckTitle';

const ListItem = ({
  item,
  updateListItem,
  modalHandler
}) => {
  return (
    <div className={style.wrapper}>
      <Remove item={item} updateListItem={updateListItem} />
      <div className={style.container}>
        <CheckTitle item={item} updateListItem={updateListItem} />
        <div className={style.info_container}>
          <Info />
          <div className={style.info_block}>{item.description}</div>
        </div>
        <Edit modalHandler={modalHandler} item={item} />
      </div>
    </div>
  );
};

export default ListItem;