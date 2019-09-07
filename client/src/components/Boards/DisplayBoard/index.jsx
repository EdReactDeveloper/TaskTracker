import React from 'react';
import { Link } from 'react-router-dom';
import DisplayTopic from '../DisplayTopic';
import style from './DipslayBoard.module.scss'; 


const DisplayBoard = ({ board }) => {
  const listOfTopics = board.topics.map(topic => <DisplayTopic key={topic._id} topic={topic} />)
  return (
    <div className={style.wrapper}>
      <h3>
        <Link to={`/boards/${board._id}`}>{board.boardTitle}</Link>
      </h3>
      <ul className={style.list}>
        {listOfTopics}
      </ul>
  
    </div>
  );
};

export default DisplayBoard;