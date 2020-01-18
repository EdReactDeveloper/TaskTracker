import React from 'react';
import Item from '../../Board/Topic/List/ListItem/static/ListItem'; 

const TopicItem = ({item, findTopic}) => {
  console.log(item)
  return <Item item={item} findTopic={findTopic} />

};

export default TopicItem;