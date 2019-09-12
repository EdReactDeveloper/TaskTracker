import React, { Component } from 'react'
import { connect } from 'react-redux';
import Topic from '../../components/Board/Topics/Topic';
import { addNewListData, addListItem, getTopic, getBoard, fetchBoards } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';

class TopicContainer extends Component {

  constructor(props) {
    super(props)
    this.modalType = 'topicModal'
  }

  render() {
    const {
      topic,
      modalHandler,
    } = this.props

    return <Topic
        topic={topic}
        modalHandler={modalHandler}
      /> 
   
  }
}

const mapStateToProps = state => {
  return {
    topic: state.board.topic,
    boards: state.board.boards,
    board: state.board.board
  }
}


export default connect(mapStateToProps, {
  addNewListData,
  addListItem,
  modalHandler,
  getTopic,
  getBoard,
  fetchBoards
})(TopicContainer);
