import React from 'react';
import Topics from '../Topics';

const Board = ({data, submitHandler, topicTitle, fetchTopicTitle}) => {

  return <div>
    <h3>{data.boardTitle}</h3>
    <h4>{topicTitle}</h4>
    <form onSubmit={submitHandler} >
      <label htmlFor="title">
        <input type="text" value={topicTitle}  name="title" onChange={(e)=> fetchTopicTitle(e.target.value)} />        
      </label>
      <button>add topic</button>
    </form>
    <Topics list={data.topics}/>
  </div>
};

export default Board;

/*

boardTitle: "firdst board"
topics: []
userId: "5d6a32ca45f4db459ca6bcd3"
__v: 0
_id: "5d6a93f175453323fc138e02"

*/ 