import React from 'react';
import style from './Sidebar.module.scss'; 
import Accordion from './Accordion'
const Sidebar = ({boards, getTopic, boardActive, goToBoard}) => {
  return (
    <aside className={style.wrapper}>
      {boards && 
      <Accordion boards={boards} getTopic={getTopic} boardActive={boardActive} goToBoard={goToBoard}/>
      }
    </aside>
  );
};

export default Sidebar;