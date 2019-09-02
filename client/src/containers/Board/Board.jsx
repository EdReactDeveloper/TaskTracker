import React, { Component } from 'react';
import Board from '../../components/Boards/Board';
import {connect} from 'react-redux'; 
import {getBoard, fetchBoards } from '../../store/actions/board';
import {addTopic, fetchTopicTitle} from '../../store/actions/topic';

class BoardContainer extends Component {
 
  componentDidMount(){
    this.props.fetchBoards().then(() => {
      const id = this.props.match.params.id
      this.props.getBoard(id)      
    })
  }

  submitHandler=(e)=>{
    const id = this.props.match.params.id
    const {addTopic, topicTitle} = this.props
    e.preventDefault()
    addTopic(topicTitle, id)
  }

  render() {
    const {board, fetchTopicTitle, topicTitle } = this.props
  return <>{board && <Board 
                      data={board} 
                      boardId={this.props.match.params.id}
                      submitHandler={this.submitHandler}
                      fetchTopicTitle={fetchTopicTitle}
                      topicTitle={topicTitle}
                      
    />}</>
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    boardTitle: state.board.boardTilte,
    topicTitle: state.topic.text
  }
}


export default connect(mapStateToProps, {getBoard, fetchBoards, fetchTopicTitle, addTopic})(BoardContainer);