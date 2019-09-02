import React from 'react';
import style from './ListItem.module.scss';

const ListItem = ({ item, updateListItem }) => {
  return (
    <div className={item.done ? style.green : ''}>
      <label htmlFor="checkbox">
        <input
          name="checkbox"
          type="checkbox"
          defaultChecked={item.done && 'checked'}
          onClick={() => updateListItem(item.topicId, item._id, 'update')}
        />
        {item.title}
      </label>
      <div>{item.description}</div>
      <button type="button" onClick={() => updateListItem(item.topicId, item._id, 'remove')}>remove</button>
    </div>
  );
};

export default ListItem;