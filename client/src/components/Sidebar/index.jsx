import React from 'react';
import style from './Sidebar.module.scss';
import Accordion from './Accordion'
import NoBoards from './NoBoards'
const Sidebar = ({ boards, getTopic, getBoard }) => {
  return (
    <aside className={style.wrapper}>
      <div className={style.NoBoard}>
        {boards ?
          <Accordion boards={boards} getTopic={getTopic} getBoard={getBoard} />
          :
          <NoBoards />
        }
      </div>
    </aside>
  );
};

export default Sidebar;