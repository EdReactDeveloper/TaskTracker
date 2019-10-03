import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../../App.module.scss';
import Auth from './auth';
import style from './Header.module.scss';

const Header = (props) => {

  return (
    <header className={style.main}>
      <div className={`${style.wrapper} ${app.container}`}>
        <nav className={style.logo}>
          <h4>
            <Link to="/">TaskTracker</Link>
          </h4>
        </nav>
        <Auth {...props} />
      </div>
    </header>
  );
};

export default Header;