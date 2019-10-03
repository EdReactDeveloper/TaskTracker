import React from 'react';
import style from './List.module.scss';

const Counter = ({list}) => {
  let count = 0
  for (let i = 0; i < list.length; i+=1) {
    if (list[i].done) {
      count += 1
    }
  }
  return (
    <span className={`${style.statistics} ${count === list.length ? style.complete : ''} `}>
      {count}/{list.length}
    </span>
  );
};

export default Counter;