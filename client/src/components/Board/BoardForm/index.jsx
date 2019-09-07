import React from 'react';
import style from './BoardForm.module.scss'; 

const AddTopicMenu = ({topicTitle, fetchTopicTitle}) => {
  return (
    <>
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
    </>
  );
};

export default AddTopicMenu;