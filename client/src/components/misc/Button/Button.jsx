import React from 'react';
import style from './Button.module.scss';
import Icon from '../icon/Icon';
import { Item } from '../icon/Selection';

const Button = ({ payload = '', type }) => {
  const {
    item,
    modalHandler,
    updateListItem,
    modalType,
    editHandler,
    editMode } = payload

  switch (type) {

    case 'edit':
      return <button
        type="button"
        className={style.edit}
        onClick={() => modalHandler(modalType, item._id)}
      >
        <Icon d={Item.edit} className={style.icon} />
      </button>;

    case 'delete':
      return <button
        type="button"
        onClick={() => updateListItem({ topicId: item.topicId, itemId: item._id }, 'remove')}
        className={style.delete}
      >
        <Icon className={style.btn_delete_icon} d={Item.delete} />
      </button>

    case 'info': return <button className={style.info}>
      i
      <div className={style.info_block}>{item.description}</div>
    </button>

    case 'editAll': return <button
      onClick={() => editHandler()}
      className={`${style.editAll} ${editMode ? style.yellow : ''}`}
    >
      {editMode ? 'edit off' : 'edit on'}
    </button>

    case 'dropMenu':
      return <button className={style.dropMenu}>
        <div className={style.dropMenu_content}></div>
      </button>

    case 'addBoard': 
    return <button 
    type='button' 
    onClick={() => modalHandler('boardsModal')}
    className={style.add}
    >create a board</button>


    default: return <button>what is this?</button>
  }

}

export default Button