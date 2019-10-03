import React from 'react';
import style from './Button.module.scss';
import Icon from '../../icon/Icon';
import { Item } from '../../icon/Selection';

const Button = ({ payload = '', type, onClick }) => {
  const {
    item,
    modalHandler,
    updateListItemAction,
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
        onClick={() => updateListItemAction({ topicId: item.topicId, itemId: item._id }, 'remove')}
        className={style.delete}
      >
        <Icon className={style.btn_delete_icon} d={Item.delete} />
      </button>

    case 'info': return <div className={style.info}>
      <button type="button" className={style.info_btn}>
        i
    </button>
      <p className={style.info_block}>{item.description}</p>
    </div>

    case 'editAll': return <button
      type="button"
      onClick={() => editHandler()}
      className={`${style.editAll} ${editMode ? style.yellow : ''}`}
    >
      {editMode ? 'edit off' : 'edit on'}
    </button>

    case 'dropMenu':
      return <button
        type="button"
        className={style.dropMenu} onClick={onClick}>
        <div className={style.dropMenu_content} />
      </button>

    case 'addBoard':
      return <button
        type='button'
        onClick={() => modalHandler('boardsModal')}
        className={style.add}
      >create a board</button>


    default: return <button type="button">no type specified</button>
  }

}

export default Button