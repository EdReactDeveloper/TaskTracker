import React, { Component } from 'react';
import Board from '../../components/Board';
import { connect } from 'react-redux';
import { getBoard, fetchBoards, clearBoard, removeBoard, getTopic } from '../../store/actions/board';
import { fetchTopicTitle } from '../../store/actions/forms';
import { addTopic } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import Loader from '../../components/misc/Loader';

class BoardContainer extends Component {

  constructor(props) {
    super(props)
    this.modalType = 'boardModal'
  }

  componentDidMount() {
    this.props.fetchBoards().then(() => {
      const id = this.props.match.params.id
      this.props.getBoard(id)
    })
  }

  componentWillUnmount() {
    this.props.clearBoard()
  }


  submitHandler = (e) => {
    const id = this.props.match.params.id
    const { addTopic, topicTitle, modalHandler } = this.props
    e.preventDefault()
    addTopic(topicTitle, id)
    modalHandler(this.modalType)
  }


  render() {
    const { board, fetchTopicTitle, topicTitle, removeBoard, history, modalHandler, loading, getTopic } = this.props
    return <>{board && !loading ?
      <Board
        board={board}
        boardId={this.props.match.params.id}
        submitHandler={this.submitHandler}
        fetchTopicTitle={fetchTopicTitle}
        topicTitle={topicTitle}
        removeBoard={removeBoard}
        history={history}
        getTopic={getTopic}
        modalType={this.modalType}
        modalHandler={modalHandler}
      /> : <Loader />
    }
    </>
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    boards: state.board.boards,
    boardTitle: state.board.boardTilte,
    topicTitle: state.forms.topicTitle,
    loading: state.board.loading,

  }
}


export default connect(mapStateToProps, { getBoard, getTopic, fetchBoards, fetchTopicTitle, addTopic, clearBoard, modalHandler, removeBoard })(BoardContainer);