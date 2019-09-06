import React, { Component } from 'react';
import Boards from '../components/Boards';
import { connect } from 'react-redux';
import { fetchBoards, addBoard } from '../store/actions/board';
import { fetchBoardTitle } from '../store/actions/forms'

class BoardsContainer extends Component {

  componentDidMount() {
    this.props.fetchBoards()
  }

  sumbitHanlder = e => {
    e.preventDefault()
    const { boardTitle } = this.props
    this.props.addBoard(boardTitle)
  }

  render() {
    const {
      boards,
      loading,
      addBoard,
      fetchBoardTitle,
      boardTitle } = this.props
    return <>
      {boards && !loading ? <Boards
        boards={boards}
        addBoard={addBoard}
        boardTitle={boardTitle}
        fetchBoardTitle={fetchBoardTitle}
        sumbitHanlder={this.sumbitHanlder}
      /> : loading}
    </>
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    loading: state.board.loading,
    boardTitle: state.forms.boardTitle

  }
}

export default connect(mapStateToProps, { fetchBoards, addBoard, fetchBoardTitle })(BoardsContainer);