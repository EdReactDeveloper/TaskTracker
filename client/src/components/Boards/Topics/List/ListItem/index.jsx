import React from 'react';
import style from './ListItem.module.scss';
import Icon from '../../../../misc/icon/Icon';
import { Item } from '../../../../misc/icon/Selection';

const ListItem = ({ item, updateListItem }) => {
  return (
    <div className={style.wrapper}>
      <button type="button" onClick={() => updateListItem(item.topicId, item._id, 'remove')} className={style.btn_delete}>
        <Icon className={style.btn_delete_icon} d={Item.delete} />
      </button>
      <label htmlFor="checkbox" className={style.container}>
        <input
          name="checkbox"
          type="checkbox"
          checked={item.done}
          onChange={() => item.done = !item.done}
          className={style.checkbox}
        />
        <span className={style.checkmark} onClick={() => updateListItem(item.topicId, item._id, 'update')}></span>
        {item.title}
        <div className={style.info_container}>
          <button className={style.btn_info}>i</button>
          <div className={style.info_block}>{item.description}</div>
        </div>
      </label>
    </div>
  );
};

export default ListItem;