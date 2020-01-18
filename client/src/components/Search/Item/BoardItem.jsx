import React from 'react';
import { Link } from 'react-router-dom';
import style from './item.module.scss'; 

const BoardItem = ({ item }) => {
  return (
    <li>
      <h3 className={style.header}>
        <Link to={`/board/${item.boardId}/${item._id}`}>
          {item.title}
        </Link>
      </h3>
    </li>
  );
};

export default BoardItem;