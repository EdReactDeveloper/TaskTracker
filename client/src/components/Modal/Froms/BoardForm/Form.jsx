import React from 'react';
import style from '../Forms.module.scss';

const Form = ({ title, onChange, handleSubmit, msg, inputRef}) => {
  return <form className = { style.form } onSubmit = { handleSubmit } >
    <label htmlFor="title" className={style.heading}>
      topic tiltle
        <input
        type="text"
        className={style.input}
        onChange={(e) => onChange(e)}
        value={title}
        name="title"
        ref={inputRef}
      />
      <div className={style.danger}>{msg}</div>
    </label>
    <button className={style.submit} disabled={title.length<1} type="submit">add topic</button>
    </form >
  
};

export default Form;