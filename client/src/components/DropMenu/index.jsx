import React from 'react';
import List from './List';
import Button from './Button'; 
import style from './DropMenu.module.scss';

const DropDown = ({
  boardItems, 
  topicItems, 
  boardsItems, 
  isOpen,
  dropdownHandler,
  board, topic
}) => {
  return (
    <div className={style.wrapper}>
      <Button>menu</Button>
      {isOpen &&
       <List 
        boardItems={boardItems}
        topicItems={topicItems}
        boardsItems={boardsItems}
        dropdownHandler={dropdownHandler}
        board={board}
        topic={topic}
       />
      }
    </div>
  );
};

export default DropDown;