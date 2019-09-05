import React from 'react';
import style from './BoardMenu.module.scss'; 

const AddTopicMenu = ({submitHandler, topicTitle, fetchTopicTitle}) => {
  return (
    <form onSubmit={submitHandler} className={style.form}>
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
      <button className={style.btn_add}>add topic</button>
    </form>
  );
};

export default AddTopicMenu;