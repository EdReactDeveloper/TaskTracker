import React from 'react';
import style from './DisplayTopic.module.scss';

const DispayTopic = ({topic}) => {
  return (
    <li className={style.wrapper}>
      <p>{topic.title}</p>
    </li>
  );
};

export default DispayTopic;