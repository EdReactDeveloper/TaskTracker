import React from 'react';
import List from '../../../containers/Board/List';
import style from './Topic.module.scss';
import Button from '../../misc/Elements/Button';
import {FORM_PAGE} from '../../misc/configs'; 

const Topic = ({ topic, editMode }) => {
  const formPage = FORM_PAGE.board
  return (
    <>
      <div className={style.header}>
        <h3 className={style.heading}>{topic.title}
        {editMode && <Button type='edit' payload={{ formPage, itemId: topic._id }} />}        
        </h3>
      </div>
      <List list={topic.list} />
    </>
  );
};

export default Topic;