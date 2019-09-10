import React from 'react';
import style from './Button.module.scss'; 

const Button = (props) => {
  return (
    <button className={style.btn}>
      {props.children}
    </button>
  );
};

export default Button;