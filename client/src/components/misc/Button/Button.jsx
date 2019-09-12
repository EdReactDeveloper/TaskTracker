import React from 'react';
import style from './Button.module.scss'; 
import Icon from '../icon/Icon'; 
import { Item } from '../icon/Selection';

export const Edit = ({item, modalHandler}) => {
  return <button type="button" className={style.edit} onClick={()=>modalHandler('topicModal', item._id)}>
    <Icon d={Item.edit} className={style.icon}/>
    </button>
};

export const Remove = ({updateListItem, item})=>{
  return  <button type="button" onClick={() => updateListItem({topicId: item.topicId, itemId: item._id}, 'remove')} className={style.delete}>
  <Icon className={style.btn_delete_icon} d={Item.delete} />
</button>
}

export const Info = () =>  <button className={style.info}>i</button>