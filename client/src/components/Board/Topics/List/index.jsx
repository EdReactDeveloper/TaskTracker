import React from 'react';
import ListItem from './ListItem'
import style from './List.module.scss';

const List = ({ 
  list, 
  edit,
  updateListItem, 
  modalHandler, 
  fetchListItemTitleEdit, 
  fetchListItemDescriptionEdit 
}) => {

  const renderList = list.map(item => {
    return <ListItem
      key={item._id}
      item={item}
      edit={edit}
      updateListItem={updateListItem}
      modalHandler={modalHandler}
      fetchListItemTitleEdit={fetchListItemTitleEdit}
      fetchListItemDescriptionEdit={fetchListItemDescriptionEdit} 
    />
  })

  return (
    <div className={style.wrapper}>
      {renderList}
    </div>
  );
};

export default List;