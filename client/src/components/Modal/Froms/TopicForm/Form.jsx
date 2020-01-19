import React from 'react';
import style from '../Forms.module.scss';

const Form = ({ onChange, title, description, handleSubmit }) => {
  return <form className={style.form} onSubmit={handleSubmit}>
     <label htmlFor="itemTitle" className={style.heading}>
        title
        <input type="text" name='title' value={title} onChange={(e) => onChange(e)} className={style.input} />
      </label>
      <label htmlFor="itemDescription" className={style.heading}>
        description
        <textarea type="text" value={description} onChange={(e) => onChange(e)} className={style.textarea} name="description" />
      </label>
    <button
      type="submit"
      className={style.submit}
    >submit</button>
  </form>



};

export default Form;