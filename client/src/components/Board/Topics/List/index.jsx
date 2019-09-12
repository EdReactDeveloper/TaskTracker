import React from 'react';
import ListItem from './ListItem'
import style from './List.module.scss';

const List = ({ 
  list, 
  edit,
  editMode,
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
      editMode={editMode}
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