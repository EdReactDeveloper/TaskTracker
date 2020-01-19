import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';

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
        <input type="button" className={style.background} onClick={() => modalHandler()} />
        <div className={style.content}>
          {children}
        </div>
      </>, this.root
    );
  }
}

export default Modal;