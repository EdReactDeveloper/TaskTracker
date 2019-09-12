import React from 'react';

import style from './Topic.module.scss';
import Topic from './Topic'; 
import NoTopic from './NoTopic'

const TopicWrapper = ({ topic, modalHandler }) => {
  return <div className={style.wrapper}>
    {topic ? 
    <Topic topic={topic} modalHandler={modalHandler}/> 
    : 
    <NoTopic />
  }
  </div>
  
};

export default TopicWrapper;