import React from 'react';
import Icon from '../../../misc/icon/Icon';
import { Item } from '../../../misc/icon/Selection';
import style from './Items.module.scss'; 

const MenuItems = ({items, dropdownHandler}) => {
  return (
    <ul>
      {items.map(item => {
          function func(){ 
            dropdownHandler(false)
            item.onClick() 
          }
          return (
            <li onClick={()=>func()} key={item.name}>
            <Icon d={Item[item.icon]} className={style.icon} />
            <p>{item.name}</p>
          </li>
          )
        })}
    </ul>
  );
};

export default MenuItems;