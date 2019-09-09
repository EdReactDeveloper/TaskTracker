import React from 'react';
import style from './Button.module.scss'; 

const Button = ({handleClick}) => <button onClick={handleClick} className={style.boards}>options</button>
 
export default Button;