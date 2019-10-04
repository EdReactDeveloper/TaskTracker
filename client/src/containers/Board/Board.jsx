import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Topic from './Topic';
import { getBoard, fetchBoards, clearBoard } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import Loader from '../../components/misc/Loader/Lines';

class BoardContainer extends Component {

  componentDidMount() {
    const { match, getBoard } = this.props
    const { id } = match.params
    getBoard(id)
  }

  componentWillUnmount() {
    const { clearBoard } = this.props
    clearBoard()
  }

  render() {
    const { board, loading } = this.props
    return (board && !loading) ? <Topic {...this.props} /> : <Loader />
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    loading: state.board.loading,
    boards: state.board.boards
  }
}

BoardContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
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
  ).isRequired,
  board: PropTypes.shape({
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
  }),
}

BoardContainer.defaultProps = {
  board: {}
}

export default connect(mapStateToProps, { getBoard, fetchBoards, modalHandler, clearBoard })(BoardContainer);