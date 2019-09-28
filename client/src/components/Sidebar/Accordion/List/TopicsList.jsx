import React from 'react';
import style from '../Accordion.module.scss'
import Counter from './Counter';

const Topics = ({ getTopic, item, board, topic, calculateDone }) => {
  return (
    <ul className={style.smenu}
      style={{ maxHeight: (board && item._id === board._id) ? item.topics.length * 3.5 + 'em' : '' }}
    >
      {item.topics.map(item => (
        <li
          className={`${style.smenuItem} ${(topic && item._id === topic._id) ? style.topic_background : ''}`}
          key={item._id}
          onClick={() => getTopic(item._id)}>
          <div className={style.smenuItemIitle}>
            {item.title}
            <Counter list={item.list} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Topics;