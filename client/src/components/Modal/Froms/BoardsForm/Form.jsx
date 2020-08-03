import React from 'react';
import style from '../Forms.module.scss';

const Form = ({ title, onChange, handleSubmit, msg, inputRef }) => {
  return <form className={style.form} onSubmit={handleSubmit}>
    <label className={style.heading}>
      board name
    <input
        value={title}
        onChange={(e) => onChange(e)}
        type="text"
        name='title'
        ref={inputRef}
        className={style.input}
      />
      <div className={style.danger}>{msg}</div>
      <button type="submit" disabled={title.length<1} className={style.submit}>add board</button>
    </label>
  </form>


};

export default Form;