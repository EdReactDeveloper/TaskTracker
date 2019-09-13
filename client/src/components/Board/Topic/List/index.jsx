import React from 'react';
import ListItem from './ListItem'
import style from './List.module.scss';

const List = (props) => {
  const { list } = props
  const renderList = list.map(item => {
    return <ListItem
      key={item._id}
      item={item}
      {...props}
    />
  })

  return (
    <div className={style.wrapper}>
      {renderList}
    </div>
  );
};

export default List;