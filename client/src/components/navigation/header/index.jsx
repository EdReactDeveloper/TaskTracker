import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import app from '../../../App.module.scss';
import Auth from './auth';

const Header = ({ isLoggedIn, logout }) => {

  return (
    <header className={style.main}>
      <div className={`${style.wrapper} ${app.container}`}>
        <nav className={style.logo}>
          <h4>
            <Link to="/">TaskTracker</Link>
          </h4>
        </nav>
        <Auth isLoggedIn={isLoggedIn} logout={logout} />
      </div>
    </header>
  );
};

export default Header;