import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';


const Topic = ({ topic, modalHandler }) => {
  return (
    <>
      <div className={style.header}>
        <h3 className={style.heading}>{topic.title}</h3>
          <button className={style.menu} onClick={() => modalHandler('boardModal', topic._id)}> edit </button>
      </div>
      <List list={topic.list} />
    </>
  );
};

export default Topic;