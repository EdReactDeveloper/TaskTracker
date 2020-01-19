import React from 'react';
import { connect } from 'react-redux';
import style from './Button.module.scss';
import Icon from '../../icon/Icon';
import { Item } from '../../icon/Selection';
import { modalHandler, editHandler } from '../../../../store/actions/modal';
import { updateListItemAction } from '../../../../store/actions/board';
import {FORM_TYPE} from '../../configs'; 

const Button = ({ type,
  payload = '',
  modalHandler,
  updateListItemAction,
  editMode,
  editHandler, onClick, ...props }) => {
  const { item, formPage, itemId, parentId } = payload
  switch (type) {

    case 'edit':
      return <button
        type="button"
        className={style.edit}
        onClick={() => modalHandler({ formType: FORM_TYPE.edit, formPage, itemId })}
      >
        <Icon d={Item.edit} className={style.icon} />
      </button>;

    case 'move':
      return <button
        type="button"
        className={style.edit}
        onClick={() => modalHandler({ formType: FORM_TYPE.move, formPage, itemId, parentId })}
      >
        {props.children}
      </button>

    case 'add':
      return <button
        type='button'
        onClick={() => modalHandler({ formType: FORM_TYPE.add, formPage })}
        className={style.add}
      >{props.children}</button>

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
      <div className={style.info_block}>{item.description}</div>
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

    case 'navigation':
      return <button
        type='button'
        className={style.navigation}
        onClick={onClick}>
        {props.children}
      </button>
    case 'search':
      return <button type="submit" className={style.search}>
        {props.children}
      </button>
    default: return <button type="button">no type specified</button>
  }

}

const mapStateToProps = state => ({
  editMode: state.modal.editMode
})

export default connect(mapStateToProps, { modalHandler, updateListItemAction, editHandler })(Button)