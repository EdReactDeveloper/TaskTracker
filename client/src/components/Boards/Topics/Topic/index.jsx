import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';
import Dropmenu from '../../../misc/DropMenu';
import {renderTopicMenu} from '../../../../containers/menuData'

const Topic = ({ data, removeTopic, modalHandler, modalType }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h3 className={style.heading}>{data.title}</h3>
        <div className={style.menu}>
          <Dropmenu items={renderTopicMenu(removeTopic, modalHandler, data._id, modalType)} />           
        </div>
      </div>
      <List data={data.list} />
    </div>
  );
};

export default Topic;