import React, { Component } from 'react';
import Board from '../../components/Board';
import { connect } from 'react-redux';
import { getBoard, fetchBoards, clearBoard } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import Loader from '../../components/misc/Loader';

class BoardContainer extends Component {

  componentDidMount() {
    const { boards, fetchBoards, getBoard, match } = this.props
    const id = match.params.id
    if (!boards) {
      fetchBoards().then(() => {
        getBoard(id)
      })
    } else {
      getBoard(id)
    }
  }

  componentWillUnmount() {
    this.props.clearBoard()
  }

  render() {
    const { board, loading } = this.props
    if (board && !loading) {
      return <Board />
    } else if (!board && loading) {
      return <Loader />
    } else {
      return 'no board'
    }
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    loading: state.board.loading,
    boards: state.board.boards
  }
}

export default connect(mapStateToProps, { getBoard, fetchBoards, clearBoard, modalHandler })(BoardContainer);