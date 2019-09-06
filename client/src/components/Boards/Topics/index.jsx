import React from 'react';
import Topic from '../../../containers/Board/Topic'
import style from './Topics.module.scss'; 
const Topics = ({topics, modalType}) => {
  const listOfTopics = topics.map((item) => <Topic key={item._id} data={item} modalType={modalType} /> )
  return (
    <div className={style.wrapper}>
      {listOfTopics}
    </div>
  );
};

export default Topics;