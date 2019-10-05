import React, { Component } from 'react';
import { connect } from 'react-redux';
import {func, bool} from 'prop-types';
import {boardsTypes, topicTypes} from './PropTypes'; 
import Boards from '../components/Boards';
import Modal from '../components/Modal';
import Form from './ModalForm';
import { fetchBoards, addBoard, getTopic, getBoard } from '../store/actions/board';
import { modalHandler } from '../store/actions/modal';

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

BoardsContainer.propTypes = {
  loading: bool.isRequired,
  fetchBoards: func.isRequired,
  modalHandler: func.isRequired,
  getBoard: func.isRequired,
  getTopic: func.isRequired,
  addBoard: func.isRequired,
  isOpen: bool.isRequired,
  boards: boardsTypes,
  topic: topicTypes
}

BoardsContainer.defaultProps={
  boards: [],
  topic: null
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