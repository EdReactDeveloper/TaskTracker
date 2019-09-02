import React from 'react';
import List from '../../../../containers/List'; 

const Topic = ({data}) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <List data={data.list}/>
    </div>
  );
};

export default Topic;