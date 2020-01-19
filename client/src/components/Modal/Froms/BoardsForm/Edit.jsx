import React from 'react';
import style from '../Forms.module.scss';

const Edit = ({ title, onChange }) => {
  return <input
    value={title}
    onChange={(e) => onChange(e)}
    type="text"
    name='title'
    className={style.input}
  />
};

export default Edit;