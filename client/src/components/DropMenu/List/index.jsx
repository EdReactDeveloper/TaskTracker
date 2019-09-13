import React from 'react';
import MenuItem from './Items'
import style from './List.module.scss';

const Menues = ({
  dropdownHandler,
  boardItems,
  topicItems,
  boardsItems,
  board, topic
}) => {
  return (
    <div className={style.list}>
      <MenuItem forElement="boards" items={boardsItems} dropdownHandler={dropdownHandler} />
      {board && <MenuItem forElement='board' items={boardItems} dropdownHandler={dropdownHandler} />}
      {topic && <MenuItem forElement='topic' items={topicItems} dropdownHandler={dropdownHandler} />}
    </div>
  );
};

export default Menues;