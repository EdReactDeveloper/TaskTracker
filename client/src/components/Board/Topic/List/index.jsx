import React from 'react';
import ListItem from './ListItem'
import style from './List.module.scss';
import Loader from '../../../misc/Loader'
const List = (props) => {
  const { list, inProgress } = props
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
      {inProgress.some(id=> id === 'addListItem') &&  
      <div className={style.loading}><Loader className={style.loader} />adding new item</div>}
    </div>
  );
};

export default List;