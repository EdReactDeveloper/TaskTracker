import React from 'react';
import style from './Modal.module.scss';

const Dialog = ({ modalHandler, modalType, children, submitHandler }) => {
  return (
    <>
      <div id="myModal" className={style.background} onClick={() => modalHandler(modalType)}>
      </div>
      <div className={style.content}>
        <form className={style.form} onSubmit={submitHandler}>
          {children}
        </form>
      </div>
    </>
  );
};

export default Dialog;