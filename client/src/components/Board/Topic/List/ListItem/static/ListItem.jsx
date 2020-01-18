import React from 'react';
import {Link} from 'react-router-dom'; 
import style from '../ListItem.module.scss';
import CheckTitleStatic from './CheckTitleStatic'; 

const ListItem = ({item, findTopic}) => {
  const boardId = findTopic(item.topicId)
  return (
    <li>
      <Link to={`/board/${boardId}/${item.topicId}`}>
      <div className={style.info_container} />
      <div className={style.container}>
      <CheckTitleStatic item={item} />
      </div>
      </Link>
    </li>
  );
};

export default ListItem;