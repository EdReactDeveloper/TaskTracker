import React from 'react';
import style from './Modal.module.scss';

const Modal = ({modalHandler, children, modalType}) => {
  return (
    <>
      <div className={style.background} onClick={() => modalHandler(modalType, null)}>
      </div>
      <div className={style.container}>
        {children}
      </div>
    </>
  );
};

export default Modal;