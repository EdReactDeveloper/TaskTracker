import React from 'react';
import style from '../Forms.module.scss';

const Edit = ({ onChange, title, description }) => {
  return (
    <>
      <label htmlFor="itemTitle" className={style.heading}>
        title
        <input type="text" name='title' value={title} onChange={(e) => onChange(e)} className={style.input} />
      </label>
      <label htmlFor="itemDescription" className={style.heading}>
        description
        <textarea type="text" value={description} onChange={(e) => onChange(e)} className={style.textarea} name="description" />
      </label>
    </>
  );
};

export default Edit;