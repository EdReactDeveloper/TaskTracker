import React from 'react';
import style from './ListItem.module.scss'; 

const ListItem = ({ item, checkListItem }) => {
  return (
    <div className={item.done ? style.green : ''}>
      <label htmlFor="checkbox">
        <input name="checkbox" type="checkbox" defaultChecked={item.done && 'checked'} onClick={()=> checkListItem(item.topicId, item._id)}/>
        {item.title}
      </label>
      <div>{item.description}</div>
    </div>
  );
};

export default ListItem;