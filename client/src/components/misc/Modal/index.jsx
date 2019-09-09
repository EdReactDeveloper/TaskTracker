import React from 'react';
import style from './Modal.module.scss';

const Dialog = ({ modalHandler, modalType, children }) => {
  return (
    <>
      <div id="myModal" className={style.background} onClick={() => modalHandler(modalType)}></div>
      <div className={style.content}>
       {children}
      </div>
    </>
  );
};

export default Dialog;