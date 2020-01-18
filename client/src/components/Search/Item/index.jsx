import React from 'react';
import TopicItem from './TopicItem';
import BoardItem from './BoardItem';

const Item = ({ item, findTopic }) => {
  if (typeof (item.topicId) !== 'undefined') {
    return <TopicItem item={item} findTopic={findTopic} />
  }
  return <BoardItem item={item} />
};

export default Item;