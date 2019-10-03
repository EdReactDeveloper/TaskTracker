import React from "react";
import BoardsList from './BoardsList';
import TopicsList from './List/TopicsList';
import Loader from '../../misc/Loader/Lines';
import style from './Accordion.module.scss'; 

const Accordion = (props) => {
  const { boards } = props
  return (
    <>
      {boards ?
        <BoardsList topicsList={TopicsList} {...props} />
        :
        <Loader className={style.loader}/>
      }
    </>
  );
}

export default Accordion;
