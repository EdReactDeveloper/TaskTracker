import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Button/Button';
import Loader from '../../../../misc/Loader/Circle';

const CheckTitle = (props) => {
  const { item, updateListItemAction, editMode, modalHandler, inProgress } = props
  return <label htmlFor="checkbox" className={style.checkTitle}>

    {inProgress.some(id => id === item._id) ? <Loader /> :
      <>
        <input
          name="checkbox"
          type="checkbox"
          checked={item.done}
          onChange={() => item.done = !item.done}
          className={style.checkbox}
        />
        <span className={style.checkmark}
          onClick={() => updateListItemAction({ topicId: item.topicId, itemId: item._id }, 'check')}>
        </span>
      </>
    }

    <p> {item.title}</p>
    <Button type='info' payload={{ item }} />
    {editMode && <Button type='edit' payload={{ item, modalType: 'topicModal', modalHandler }} />}
  </label>
};

export default CheckTitle;