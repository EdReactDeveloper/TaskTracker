import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const {clearBoard } = this.props
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

export default connect(mapStateToProps, { getBoard, fetchBoards, modalHandler, clearBoard })(BoardContainer);