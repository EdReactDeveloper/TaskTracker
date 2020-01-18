import React from 'react';
import style from './Sidebar.module.scss';
import Accordion from './Accordion'

const Sidebar = ({ boards, getBoard, topic, board }) => {
  return (
    <aside className={style.wrapper}>
      <div className={style.NoBoard}>
        <Accordion
          boards={boards}
          getBoard={getBoard}
          topic={topic}
          board={board}
        />
      </div>
    </aside>
  );
};

export default Sidebar;