import React from 'react';
import style from './Modal.module.scss';

const Modal = ({ modalHandler, modalType, children }) => { // rendered by containers/Boards.jsx
  return (
    <>
      <div className={style.background} onClick={() => modalHandler(modalType)}></div>
      <div className={style.content}>
       {children}
      </div>
    </>
  );
};

export default Modal;