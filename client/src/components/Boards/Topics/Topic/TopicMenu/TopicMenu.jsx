import React from 'react';
import style from './TopicMenu.module.scss';

const AddTopicMenu = ({
  submitHandler,
  fetchTopicItemTitle,
  fetchTopicItmeDescription,
  topicItemTitle,   
  topicItemDescription
}) => {
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <label className={style.heading}>title
      <input
        type="text"
        value={topicItemTitle}
        onChange={(e) => fetchTopicItemTitle(e.target.value)}
        className={style.input}
      />
      </label>
      <label className={style.heading}>description
      <textarea 
      value={topicItemDescription} 
      onChange={(e) => fetchTopicItmeDescription(e.target.value)} 
        className={style.textarea}
        />
        </label>
      <button 
      type="submit" 
      className={style.btn_add}  
      >create</button>
    </form>
  );
};

export default AddTopicMenu;