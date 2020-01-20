import React from 'react';
import style from './Topic.module.scss';
import Topic from './Topic'; 
import NoTopic from './NoTopic';

const TopicWrapper = ({ topic, board, editMode }) => {
  return <div className={style.wrapper}>
    {topic ? 
    <Topic topic={topic} editMode={editMode}/> 
    : 
    <NoTopic board={board} item={topic} />
  }
  </div>
  
};

export default TopicWrapper;