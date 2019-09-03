import React from 'react';
import List from '../../../../containers/Board/List';
import style from './Topic.module.scss';
import AddTopicMenu from './AddTopicMenu';

const Topic = ({ data, submitHandler, addNewListData, type, removeTopic }) => {

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
      <button onClick={() => removeTopic(data._id)}>remove topic</button>
      <List data={data.list} />
    </div>
  );
};

export default Topic;