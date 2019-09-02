import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';
import AddTopicMenu from './AddTopicMenu';

const Topic = ({ data, submitHandler, addNewListData, type }) => {

  
 
  return (
    <div className={style.wrapper}>
      <h3>{data.title}</h3>
      <AddTopicMenu
        listItemId={data._id}
        topicId={data._id}
        submitHandler={submitHandler}
        addNewListData={addNewListData}
        type={type}
        data={data}
      />
      <List data={data.list} />
    </div>
  );
};

export default Topic;