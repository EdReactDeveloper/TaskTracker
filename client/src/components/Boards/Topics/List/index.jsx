import React from 'react';
import ListItem from './ListItem'
import style from './List.module.scss'; 

const List = ({list, updateListItem}) => {
  
  const renderList = list.map(item=> <ListItem key={item._id} item={item} updateListItem={updateListItem} /> ) 
  return (
    <div className={style.wrapper}>
      {renderList}
    </div>
  );
};

export default List;