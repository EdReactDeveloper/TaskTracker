import React from 'react';
import {Link } from 'react-router-dom'; 
import style from './header.module.scss'; 
import Auth from './auth'; 

const Header = ({isLoggedIn, logout}) => {

  return (
    <div className={style.header__wrapper}>
      <div className="header__navigation container">
        <Link to="/">Home</Link>
      </div>
    <Auth  isLoggedIn={isLoggedIn} logout={logout}/>
    </div>
  );
};

export default Header;