import React from 'react';

const Topics = ({list}) => {

  const topics = list.map(item => <div key={item._id}>{item.title}</div>)

  return (
    <div>
      {topics}
    </div>
  );
};

export default Topics;