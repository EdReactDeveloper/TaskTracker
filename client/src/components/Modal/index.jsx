import React, { Component } from 'react';
import style from './Modal.module.scss';
import ReactDOM from 'react-dom';

class Modal extends Component {
  componentWillMount() {
    this.root = document.createElement('div')
    document.body.appendChild(this.root)
  }

  componentWillUnmount() {
    document.body.removeChild(this.root)
  }
  render() {

    const { modalHandler, modalType, children } = this.props // rendered by containers/Boards.jsx
    return ReactDOM.createPortal(
      <>
        <div className={style.background} onClick={() => modalHandler(modalType)}></div>
        <div className={style.content}>
          {children}
        </div>
      </>, this.root
    );
  }
}

export default Modal;