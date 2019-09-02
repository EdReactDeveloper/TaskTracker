import React from 'react';
import Topic from './Topic'
const Topics = ({topics}) => {
  
  const listOfTopics = topics.map(item => <Topic key={item._id} data={item} /> )
  return (
    <div>
      {listOfTopics}
    </div>
  );
};

export default Topics;