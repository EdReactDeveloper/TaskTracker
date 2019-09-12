import React, { Component } from 'react';
import Nav from '../components/Nav'
import { connect } from 'react-redux';
import { modalHandler, editHandler } from '../store/actions/modal';

class NavContainer extends Component {
  render() {
    const { history, board, modalHandler, editHandler, editMode } = this.props
    return <Nav
      history={history}
      board={board}
      modalHandler={modalHandler}
      editHandler={editHandler} 
      editMode={editMode}
      />
  }
}

const mapStateToProps = state => {
  return {
    history: state.board.history,
    board: state.board.board,
    editMode: state.modal.editMode
  }
}

export default connect(mapStateToProps, { modalHandler, editHandler })(NavContainer);