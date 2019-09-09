import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import app from '../../../App.module.scss';
import Auth from './auth';

const Header = ({ isLoggedIn, logout }) => {

  return (
    <header className={style.main}>
      <div className={`${style.wrapper} ${app.container}`}>
        <nav className={style.navigation}>
          <Link to="/">Home</Link>
        </nav>
        <Auth isLoggedIn={isLoggedIn} logout={logout} />
      </div>
    </header>
  );
};

export default Header;