import React from 'react';
import style from '../Forms.module.scss';

const Move = ({ handleSubmit, boards, topic, selectItem, moveToId }) => {

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <ul className={style.move_list}>
          {boards.map(item => (
            <li key={item._id}>
              <h4>{item.title}</h4>
              {item.topics.map(item => {
                if (item._id !== topic._id) {
                  return <button
                    type="button"
                    key={item._id}
                    className={`${style.move_item} ${moveToId === item._id ? style.move_select : ''}`}
                    onClick={() => selectItem(item._id)}
                  >{item.title}</button>
                }
                return null
              }
              )}
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className={style.submit}

        >submit</button>
      </form>
    </>
  );
};

export default Move;