import React from 'react';
import style from './ListItem.module.scss';
import Icon from '../../../../misc/icon/Icon';
import { Item } from '../../../../misc/icon/Selection';

const ListItem = ({ 
  item, 
  updateListItem, 
  modalHandler
}) => {
  return (
    <div className={style.wrapper}>
      <button type="button" onClick={() => updateListItem({topicId: item.topicId, itemId: item._id}, 'remove')} className={style.btn_delete}>
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
        <span className={style.checkmark} onClick={() => updateListItem({topicId: item.topicId, itemId: item._id}, 'check')}></span>
        {item.title}
        <div className={style.info_container}>
          <button className={style.btn_info}>i</button>
          <div className={style.info_block}>{item.description}</div>
        </div>
      </label>
      <button type="button" onClick={()=>modalHandler('topicModal', item._id)}>edit</button>
    </div>
  );
};

export default ListItem;