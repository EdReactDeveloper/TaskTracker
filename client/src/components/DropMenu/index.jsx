import React from 'react';
import List from './List';
import Button from '../misc/Button/Button'; 
import style from './DropMenu.module.scss';

const DropDown = (props) => {
  const {isOpen} = props
  return (
    <div className={style.wrapper}>
      <Button type='dropMenu'/>
      {isOpen &&
       <List {...props}   />
      }
    </div>
  );
};

export default DropDown;