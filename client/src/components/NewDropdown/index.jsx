import React from 'react';
import Items from './Menues';

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
       <Items 
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