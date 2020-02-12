import React from 'react';
import style from './ListItem.module.scss';
import Button from '../../../../misc/Elements/Button';
import Loader from '../../../../misc/Loader/Circle';
import {formatTitle} from '../../../../misc/utilFuncs';
import {FORM_PAGE} from '../../../../misc/configs'; 

const CheckTitle = (props) => {
  const { item, updateListItemAction, editMode, inProgress } = props
  const formPage = FORM_PAGE.topic
  const checkHandler = () => {
    item.done = !item.done
  }
  return <>
    {inProgress.some(id => id === item._id) ? <Loader /> :
      <label htmlFor="checkbox" className={style.checkTitle}>
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

      </label>
    }

    <div className={style.title}> {formatTitle(item.title)}</div>
    {item.description && <Button type='info' payload={{ item }} />}
    {editMode && <>
    <Button type='edit' payload={{ formPage, itemId: item._id }} />
    <Button type='move' payload={{formPage, itemId: item._id, parentId: item.topicId}}> move</Button>
    </>}
  </>
};

export default CheckTitle;