import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Button/Button';

const CheckTitle = ({ item, updateListItem, editMode, modalHandler }) => {
  return <label htmlFor="checkbox" className={style.checkTitle}>
    <input
      name="checkbox"
      type="checkbox"
      checked={item.done}
      onChange={() => item.done = !item.done}
      className={style.checkbox}
    />
    <span className={style.checkmark} onClick={() => updateListItem({ topicId: item.topicId, itemId: item._id }, 'check')}></span>
    <p> {item.title}</p> 
    <Button type='info' payload={{item}}/>
    {editMode && <Button type='edit' payload={{ item, modalType: 'topicModal', modalHandler }} />}
  </label>
};

export default CheckTitle;