import React from 'react';

const AddTopicMenu = ({
  submitHandler,
  addNewListData,
  type,
  topicId,
  data
}) => {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={data[type.newListTitle]} onChange={(e) => addNewListData(topicId, e.target.value, type.newListTitle)} />
      <textarea value={data[type.newListDescription]} onChange={(e) => addNewListData(topicId, e.target.value, type.newListDescription)} />
      <button type="submit">add</button>
    </form>
  );
};

export default AddTopicMenu;