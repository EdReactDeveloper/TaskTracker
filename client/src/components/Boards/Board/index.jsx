import React from 'react';
import Topics from '../../../containers/Topics';

const Board = ({data, boardId, submitHandler, topicTitle, fetchTopicTitle}) => {

  return <div className="container">
    <h3>{data.boardTitle}</h3>
    <h4>{topicTitle}</h4>
    <form onSubmit={submitHandler} >
      <label htmlFor="title">
        <input type="text" value={topicTitle}  name="title" onChange={(e)=> fetchTopicTitle(e.target.value)} />        
      </label>
      <button>add topic</button>
    </form>
    <Topics boardId={boardId}/>
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