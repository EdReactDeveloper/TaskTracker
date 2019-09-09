import React from 'react';
import DropMenu from '../MenuItems'
const Menues = ({
  dropdownHandler,
  boardItems,
  topicItems,
  boardsItems,
  board, topic
}) => {
  return (
    <div>
      <DropMenu forElement="boards" items={boardsItems} dropdownHandler={dropdownHandler} />
      {board && <DropMenu forElement='board' items={boardItems} dropdownHandler={dropdownHandler} />}
      {topic && <DropMenu forElement='topic' items={topicItems} dropdownHandler={dropdownHandler} />}
    </div>
  );
};

export default Menues;