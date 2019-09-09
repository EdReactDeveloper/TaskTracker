import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';
import Dropmenu from '../../../misc/DropMenu';
import {renderTopicMenu} from '../../../../containers/menuData'

const Topic = ({ topic, removeTopic, modalHandler, modalType }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h3 className={style.heading}>{topic.title}</h3>
        <div className={style.menu}>
          <Dropmenu items={renderTopicMenu(removeTopic, modalHandler, topic._id, topic.boardId, modalType)} />           
        </div>
      </div>
      <List list={topic.list} />
    </div>
  );
};

export default Topic;