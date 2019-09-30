import React, { Component } from 'react';
import Board from '../../components/Board';
import { connect } from 'react-redux';
import { getBoard, fetchBoards } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import Loader from '../../components/misc/Loader';

class BoardContainer extends Component {

  componentDidMount() {
    const { getBoard, match } = this.props
    const id = match.params.id
    getBoard(id)
  }

  componentWillUnmount() {
    this.props.getBoard()
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

export default connect(mapStateToProps, { getBoard, fetchBoards, modalHandler })(BoardContainer);