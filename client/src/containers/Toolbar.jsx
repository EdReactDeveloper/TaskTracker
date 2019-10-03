import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Toolbar'
import { modalHandler, editHandler } from '../store/actions/modal';

const NavContainer = ({loading, ...props}) => <>{!loading && <Nav {...props} /> }</>

const mapStateToProps = state => {
  return {
    history: state.board.history,
    board: state.board.board,
    editMode: state.modal.editMode,
    boards: state.board.boards,
    loading: state.board.loading
  }
}

export default connect(mapStateToProps, { modalHandler, editHandler })(NavContainer);