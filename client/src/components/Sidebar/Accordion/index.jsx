import React from "react";
import BoardsList from './BoardsList';
import TopicsList from './List/TopicsList';
import Loader from '../../misc/Loader';

const Accordion = (props) => {
  const { boards } = props
  return (
    <>
      {boards ?
        <BoardsList topicsList={TopicsList} {...props} />
        :
        <Loader />
      }
    </>
  );
}

export default Accordion;
