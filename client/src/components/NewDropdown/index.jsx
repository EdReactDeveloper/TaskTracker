import React from 'react';
import List from './List';

const DropDown = ({
  boardItems, 
  topicItems, 
  boardsItems, 
  isOpen,
  dropdownHandler,
  board, topic
}) => {
  return (
    <div>
      <button>menu</button>
      {isOpen && 
      <div>
       <List 
        boardItems={boardItems}
        topicItems={topicItems}
        boardsItems={boardsItems}
        dropdownHandler={dropdownHandler}
        board={board}
        topic={topic}
       />
        
      </div>
      }
    </div>
  );
};

export default DropDown;