import React from 'react';
import ListItem from './ListItem'
const List = ({list}) => {
  
  const renderList = list.map(item=> <ListItem key={item._id} item={item} /> ) 
  return (
    <div>
      {renderList}
    </div>
  );
};

export default List;