import React, { Component } from 'react';
import Nav from '../components/Toolbar'
import { connect } from 'react-redux';
import { modalHandler, editHandler } from '../store/actions/modal';

class NavContainer extends Component {
  render() {
    const { loading } = this.props
    return <>
      {
        !loading && <Nav {...this.props} />
      }
    </>
  }
}

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