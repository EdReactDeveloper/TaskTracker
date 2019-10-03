import React from 'react';
import Icon from '../../../misc/icon/Icon';
import { Item } from '../../../misc/icon/Selection';
import style from './Items.module.scss';

const MenuItems = ({ items, dropdownHandler }) => {
  return (
    <ul className={style.list}>
      {items.map(item => {
        function openModal() {
          dropdownHandler(false)
          item.onClick()
        }
        return (
          <button type="button" onClick={openModal} key={item.name} className={style.item}>
            <Icon d={Item[item.icon]} className={style.icon} />
            <p>{item.name}</p>
          </button>
        )
      })}
    </ul>
  );
};

export default MenuItems;