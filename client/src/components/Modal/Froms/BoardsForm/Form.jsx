import React from 'react';
import style from '../Forms.module.scss';

const Form = ({ title, onChange, handleSubmit }) => {
  return <form className={style.form} onSubmit={handleSubmit}>
    <label className={style.heading}>
      board name
    <input
        value={title}
        onChange={(e) => onChange(e)}
        type="text"
        name='title'
        className={style.input}
      />
      <button type="submit" className={style.submit}>add board</button>
    </label>
  </form>


};

export default Form;