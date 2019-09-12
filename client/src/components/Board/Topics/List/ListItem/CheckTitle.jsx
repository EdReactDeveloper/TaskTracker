import React from 'react';
import style from './ListItem.module.scss'; 

const CheckTitle = ({item, updateListItem}) => {
  return  <label htmlFor="checkbox" className={style.checkTitle}>
  <input
    name="checkbox"
    type="checkbox"
    checked={item.done}
    onChange={() => item.done = !item.done}
    className={style.checkbox}
  />
  <span className={style.checkmark} onClick={() => updateListItem({ topicId: item.topicId, itemId: item._id }, 'check')}></span>
  {item.title}
</label>
};

export default CheckTitle;