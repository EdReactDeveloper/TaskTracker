import React from 'react';
import style from '../ListItem.module.scss';
import Button from '../../../../../misc/Elements/Button';
import formatTitle from '../../../../../misc/utilFuncs';

const CheckTitle = (props) => {
  const { item } = props
  return <>
      <label htmlFor="checkbox" className={style.checkTitle}>
        <input
          id="checkbox"
          name="checkbox"
          type="checkbox"
          checked={item.done}
          className={style.checkbox}
          onChange={()=> true}
        />
        <button type="button" name="checkbox" aria-label="checkbox" className={style.checkmark} />
      </label>
    <div className={style.title}> {formatTitle(item.title)}</div>
    {item.description && <Button type='info' payload={{ item }} />}
  </>
};

export default CheckTitle;