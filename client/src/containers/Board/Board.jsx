import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../../components/Board';
import { getBoard, fetchBoards, clearBoard } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import Loader from '../../components/misc/Loader/Lines';

class BoardContainer extends Component {

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params
    getBoard(id)
  }

  componentWillUnmount() {
    clearBoard()
  }

  render() {
    const { board, loading } = this.props
    if (board && !loading) {
      return <Board />
    } if (!board && loading) {
      return <Loader />
    }
    return 'no board'

  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    loading: state.board.loading,
    boards: state.board.boards
  }
}

export default connect(mapStateToProps, { getBoard, fetchBoards, modalHandler, clearBoard })(BoardContainer);