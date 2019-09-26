import React from 'react';
import List from './List';
import Button from '../misc/Elements/Button'; 
import style from './DropMenu.module.scss';

const DropDown = (props) => {
  const {isOpen, onClickHandler} = props
  return (
    <div className={style.wrapper} ref={props.toggleContainer}>
      <Button type='dropMenu' onClick={onClickHandler}/>
      {isOpen &&
       <List {...props}   />
      }
    </div>
  );
};

export default DropDown;