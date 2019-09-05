import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';
import AddTopicMenu from './TopicMenu/TopicMenu';
import Modal from '../../../misc/Modal/Modal';
import Dropmenu from '../../../misc/DropMenu';
import {renderTopicMenu} from '../../../../containers/menuData'

const Topic = ({ data, submitHandler, addNewListData, fieldType, removeTopic, modalHandler, modal, modalType }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h3 className={style.heading}>{data.title}</h3>
        <div className={style.menu}>
          <Dropmenu items={renderTopicMenu(removeTopic, modalHandler, data._id, modalType)} />           
        </div>
      </div>
      <List data={data.list} />
      {modal &&
        <Modal modalHandler={modalHandler} modalType={modalType}>
          <AddTopicMenu
            listItemId={data._id}
            topicId={data._id}
            submitHandler={submitHandler}
            addNewListData={addNewListData}
            fieldType={fieldType}
            data={data}
            modalType={modalType}
          />
        </Modal>
      }
    </div>
  );
};

export default Topic;