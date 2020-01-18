import React from 'react';
import {Link} from 'react-router-dom'; 
import style from '../Accordion.module.scss'
import Counter from './Counter';

const Topics = ({ itemBoard, board, topic }) => {
  const elementHeight = 3.5
  const units = 'em'
  return (
    <ul className={style.smenu}
      style={{ maxHeight: (board && itemBoard._id === board._id) ? itemBoard.topics.length * elementHeight + units : '' }}
    >
      {itemBoard.topics.map(itemTopic => (
        <li
          className={`${style.smenuItem} ${(topic && itemTopic._id === topic._id) ? style.topic_background : ''}`}
          key={itemTopic._id}
          >
          <Link to={`/board/${itemBoard._id}/${itemTopic._id}`} className={style.smenuItemIitle}>
            {itemTopic.title}
            {itemTopic.list.length > 0 && <Counter list={itemTopic.list} />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Topics;