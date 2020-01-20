import React from 'react';
import style from './Topic.module.scss';
import Button from '../../misc/Elements/Button'
import {FORM_PAGE} from '../../misc/configs'; 


const NoTopic = ({ board }) => {
  const formPage = FORM_PAGE.board
  return (
    <div className={style.noTopic}>
      {board.topics.length > 0 ?
        <h3 className={style.noTopic_heading}>Select a topic</h3>
        :
        <Button type="add" payload={{ formPage, parentId: board._id }} >add topic</Button>
      }
    </div>
  );
};

export default NoTopic;