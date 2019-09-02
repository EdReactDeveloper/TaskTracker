import React from 'react';
import Topics from '../../../containers/Board/Topics';

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

