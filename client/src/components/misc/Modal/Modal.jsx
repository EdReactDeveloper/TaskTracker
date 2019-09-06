import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import style from './Modal.module.scss'; 

const Modal = ({ modalHandler, submitHandler, children, modalType }) => {
  return (
    <Dialog
      open={() => modalHandler(modalType)}
      onClose={() => modalHandler(modalType)}
      aria-labelledby="form-dialog-title"
      bodyStyle={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
    >
      <form onSubmit={submitHandler} className={style.form}>
      {children}
      </form>
    </Dialog>
  );
};

export default Modal;