import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Elements/Button';
import Loader from '../../../../misc/Loader/Circle';
import formatTitle from '../../../../misc/utilFuncs';

const CheckTitle = (props) => {
  const { item, updateListItemAction, editMode, modalHandler, inProgress } = props
  const checkHandler = () => {
    item.done = !item.done
  }
  return <>
    <label htmlFor="checkbox" className={style.checkTitle}>

      {inProgress.some(id => id === item._id) ? <Loader /> :
        <>
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={item.done}
            onChange={() => checkHandler}
            className={style.checkbox}
          />
          <button type="button" name="checkbox" aria-label="checkbox" className={style.checkmark} 
            onClick={() => updateListItemAction({ topicId: item.topicId, itemId: item._id }, 'check')} />
        </>
      }
    </label>

    <div className={style.title}> {formatTitle(item.title)}</div>
    {item.description && <Button type='info' payload={{ item }} />}
    {editMode && <Button type='edit' payload={{ item, modalType: 'topicModal', modalHandler }} />}
  </>
};

export default CheckTitle;