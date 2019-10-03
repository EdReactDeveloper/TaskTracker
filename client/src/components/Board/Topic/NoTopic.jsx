import React from 'react';
import style from './Topic.module.scss';
import Button from '../../misc/Elements/Button'


const NoTopic = ({ board, item }) => {
  return (
    <div className={style.noTopic}>
      {board.topics.length > 0 ?
        <h3 className={style.noTopic_heading}>Select a topic</h3>
        :
        <Button type="add" payload={{item, modalType:'boardModal'}} >add topic</Button>
      }
    </div>
  );
};

export default NoTopic;