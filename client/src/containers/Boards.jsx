import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

BoardsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchBoards: PropTypes.func.isRequired,
  modalHandler: PropTypes.func.isRequired,
  getBoard: PropTypes.func.isRequired,
  getTopic: PropTypes.func.isRequired,
  addBoard: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          boardId: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          list: PropTypes.arrayOf(
            PropTypes.shape({
              _id: PropTypes.string.isRequired,
              topicId: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              done: PropTypes.bool.isRequired,
            })
          )
        })
      ).isRequired
    }).isRequired,
  ),
  topic: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    boardId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        topicId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        done: PropTypes.bool.isRequired,
      })
    )
  })
}

BoardsContainer.defaultProps={
  boards: [],
  topic: {}
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