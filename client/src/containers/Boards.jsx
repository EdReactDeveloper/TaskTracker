import React, { Component } from 'react';
import Boards from '../components/Boards';
import { connect } from 'react-redux';
import { fetchBoards, addBoard, getTopic, getBoard } from '../store/actions/board';
import { fetchBoardTitle } from '../store/actions/forms'
import Loader from '../components/misc/Loader';
import Modal from '../components/Modal';
import { modalHandler } from '../store/actions/modal';
import Form from './ModalForm';


class BoardsContainer extends Component {

  componentDidMount() {
    const { fetchBoards, getBoard, history, board } = this.props
    if (!board) {
      fetchBoards(history)
    } else {
      getBoard(board._id)
    }
  }

  render() {
    const {
      boards,
      loading,
      modalHandler, isOpen, getTopic, getBoard, history, match } = this.props
    return <>
      {boards && !loading ? <Boards
        boards={boards}
        getTopic={getTopic}
        getBoard={getBoard}
      /> : <Loader />}
      {isOpen && <Modal modalHandler={modalHandler}>
        <Form boardId={match.params.id} history={history} />
      </Modal>}
    </>
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    loading: state.board.loading,
    boardTitle: state.forms.boardTitle,
    isOpen: state.modal.isOpen,
    board: state.board.board
  }
}

export default connect(mapStateToProps, {
  fetchBoards,
  getBoard,
  getTopic,
  addBoard,
  fetchBoardTitle,
  modalHandler
})(BoardsContainer);