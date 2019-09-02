import React from 'react';
import ListItem from './ListItem'
import style from './List.module.scss'; 

const List = ({list, checkListItem}) => {
  
  const renderList = list.map(item=> <ListItem key={item._id} item={item} checkListItem={checkListItem} /> ) 
  return (
    <div className={style.wrapper}>
      {renderList}
    </div>
  );
};

export default List;