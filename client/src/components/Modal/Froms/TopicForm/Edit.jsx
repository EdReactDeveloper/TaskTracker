import React from 'react';
import style from '../Forms.module.scss';

const Edit = ({ fetchListItemTitleEdit, item }) => {
  return (
    <>
      <label className={style.heading}>title
      <input
          type="text"
          value={item.title}
          onChange={(e) => fetchListItemTitleEdit(e.target.value, item._id, 'title')}
          className={style.input}
        />
      </label>
      <label className={style.heading}>description
      <textarea
          value={item.description}
          onChange={(e) => fetchListItemTitleEdit(e.target.value, item._id, 'description')}
          className={style.textarea}
        />
      </label>
    </>
  );
};

export default Edit;