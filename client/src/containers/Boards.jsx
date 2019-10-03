import React, { Component } from 'react';
import { connect } from 'react-redux';
import Boards from '../components/Boards';
import { fetchBoards, addBoard, getTopic, getBoard } from '../store/actions/board';
import Modal from '../components/Modal';
import { modalHandler } from '../store/actions/modal';
import Form from './ModalForm';


class BoardsContainer extends Component {

  componentDidMount() {
    const { fetchBoards } = this.props
      fetchBoards()
  }

  render() {
    const { modalHandler, isOpen, history, match } = this.props
    return <>
     <Boards {...this.props} />
      {isOpen &&
        <Modal modalHandler={modalHandler}>
          <Form boardId={match.params.id} history={history} />
        </Modal>}
    </>
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    loading: state.board.loading,
    isOpen: state.modal.isOpen,
    board: state.board.board,
    topic: state.board.topic
  }
}

export default connect(mapStateToProps, {
  fetchBoards,
  getBoard,
  getTopic,
  addBoard,
  modalHandler
})(BoardsContainer);