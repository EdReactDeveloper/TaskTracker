import React from 'react';
import { Link } from 'react-router-dom';
import style from './Auth.module.scss';
import Icon from '../../../misc/icon/Icon';
import { Board, Auth } from '../../../misc/icon/Selection';
const Authorized = ({ logout }) => {
  return (
    <div className={style.auth__wrapper}>
      <div className={style.auth__item}>
        <Icon d={Board.boards} className={style.icon} size='32' sizeX='1' />
        <Link to="/boards">boards</Link>
      </div>
      <button type="button" onClick={() => logout()} className={style.auth__item} >
        <Icon d={Auth.logout} className={style.icon} size='30' sizeX='1' />
        logout</button>
    </div>
  );
};

export default Authorized;