import React, { Component } from 'react';
import { connect } from 'react-redux';
import {func, bool} from 'prop-types';
import {boardsTypes, topicTypes} from './PropTypes'; 
import Boards from '../components/Boards';
import { fetchBoards, addBoard, getBoard } from '../store/actions/board';

class BoardsContainer extends Component {

  componentDidMount() {
    const { fetchBoards } = this.props
    fetchBoards()
  }
  
  render() {

    return <Boards {...this.props} />
    
  }
}

BoardsContainer.propTypes = {
  loading: bool.isRequired,
  fetchBoards: func.isRequired,
  getBoard: func.isRequired,
  addBoard: func.isRequired,
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
    board: state.board.board,
    topic: state.board.topic
  }
}

export default connect(mapStateToProps, {
  fetchBoards,
  getBoard,
  addBoard,
})(BoardsContainer);