import React from 'react';
import style from '../Forms.module.scss';

const Move = ({ handleSubmit, boards, selectItem, moveToId }) => {

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <ul className={style.move_list}>
          {boards.map(item => (
            <li key={item._id}>
              <h4>{item.title}</h4>
              {item.topics.map(item => (
                <button
                  type="button"
                  key={item._id}
                  className={`${style.move_item} ${moveToId === item._id ? style.move_select : ''}` }
                  onClick={() => selectItem(item._id)}
                >{item.title}</button>
              ))}
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