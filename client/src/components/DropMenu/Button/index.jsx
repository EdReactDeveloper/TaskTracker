import React from 'react';
import style from './Button.module.scss'; 

const Button = (props) => {
  return (
    <button className={style.btn}>
      <div className={style.btn_content}></div>
    </button>
  );
};

export default Button;