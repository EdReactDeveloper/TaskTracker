import React from 'react';
import style from './TopicMenu.module.scss';

const AddTopicMenu = ({
  submitHandler,
  addNewListData,
  fieldType,
  topicId,
  data
}) => {
  return (
    <form onSubmit={submitHandler} className={style.form}>
      <label className={style.heading}>title
      <input
        type="text"
        value={data[fieldType.newListTitle]}
        onChange={(e) => addNewListData(topicId, e.target.value, fieldType.newListTitle)}
        className={style.input}
      />
      </label>
      <label className={style.heading}>description
      <textarea 
      value={data[fieldType.newListDescription]} 
      onChange={(e) => addNewListData(topicId, e.target.value, 
        fieldType.newListDescription)} 
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