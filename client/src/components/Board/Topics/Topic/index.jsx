import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';


const Topic = ({ topic }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h3 className={style.heading}>{topic.title}</h3>
        <div className={style.menu}>
                   
        </div>
      </div>
      <List list={topic.list} />
    </div>
  );
};

export default Topic;