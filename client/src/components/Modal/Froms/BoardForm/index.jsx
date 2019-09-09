import React from 'react';
import style from './BoardForm.module.scss'; 

const BoardForm = ({topicTitle, fetchTopicTitle, submitHandler}) => {
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <label htmlFor="title" className={style.title}>
        topic tiltle
        <input 
        type="text" 
        value={topicTitle}  
        name="title" onChange={(e)=> 
        fetchTopicTitle(e.target.value)} 
        className={style.input}
        />        
      </label>
      <button className={style.btn_add} type="submit">add topic</button>
    </form>
  );
};

export default BoardForm;