import React from 'react';
import style from './Topic.module.scss';
import Topic from './Topic'; 
import NoTopic from './NoTopic'

const TopicWrapper = ({ topic, modalHandler, editMode }) => {
  return <div className={style.wrapper}>
    {topic ? 
    <Topic topic={topic} modalHandler={modalHandler} editMode={editMode}/> 
    : 
    <NoTopic />
  }
  </div>
  
};

export default TopicWrapper;