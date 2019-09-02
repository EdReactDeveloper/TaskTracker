import React from 'react';

const ListItem = ({ item }) => {
  return (
    <div>
      <label htmlFor="checkbox">
        <input name="checkbox" type="checkbox" defaultChecked={item.done && 'checked'} />
        {item.title}
      </label>
      <div>{item.description}</div>
    </div>
  );
};

export default ListItem;