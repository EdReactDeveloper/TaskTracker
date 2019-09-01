import React from 'react';
import {Link} from 'react-router-dom'; 
import style from './Auth.module.scss'; 

const Authorized = ({logout}) => {
  return (
    <div className={style.auth__wrapper}>
      <div className={style.auth__item}>
      <Link to="/boards">boards</Link>
      </div>
      <button type="button" onClick={logout} className={style.auth__item} >logout</button>
    </div>
  );
};

export default Authorized;