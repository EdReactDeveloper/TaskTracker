import React from 'react';
import style from '../Forms.module.scss';

const Edit = ({title, onChange}) => {
  return <input
    type="text"
    className={style.input}
    onChange={(e)=> onChange(e)}
    value={title}
    name="title"
  />
};

export default Edit;