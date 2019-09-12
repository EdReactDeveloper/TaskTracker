import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';
import Button from '../../../misc/Button/Button';

const Topic = ({ topic, modalHandler, editMode }) => {
  return (
    <>
      <div className={style.header}>
        <h3 className={style.heading}>{topic.title}
        {editMode && <Button type='edit' payload={{ modalHandler, modalType: 'boardModal', item: topic }} />}        
        </h3>
      </div>
      <List list={topic.list} />
    </>
  );
};

export default Topic;