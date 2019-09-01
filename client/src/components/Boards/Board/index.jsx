import React from 'react';
import Topic from './Topic'; 

const Board = ({data}) => {
  const list = data.topics.map(topic=> <Topic key={topic} topic={topic} /> )

  return (
    <div>
      <h3>{data.boardTitle}</h3>
      <ul>
        {list}
      </ul>
    </div>
  );
};

export default Board;

/*

boardTitle: "firdst board"
topics: []
userId: "5d6a32ca45f4db459ca6bcd3"
__v: 0
_id: "5d6a93f175453323fc138e02"

*/ 