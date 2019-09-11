import React from 'react';
import style from './Sidebar.module.scss'; 
import Accordion from './Accordion'
const Sidebar = ({boards, getTopic, getBoard}) => {
  return (
    <aside className={style.wrapper}>
      {boards && 
      <Accordion boards={boards} getTopic={getTopic} getBoard={getBoard}/>
      }
    </aside>
  );
};

export default Sidebar;