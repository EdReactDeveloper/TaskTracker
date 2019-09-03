import React, { Component } from 'react';
import Board from '../../components/Boards/Board';
import {connect} from 'react-redux'; 
import {getBoard, fetchBoards, clearBoard, removeBoard } from '../../store/actions/board';
import {fetchTopicTitle} from '../../store/actions/formData';
import {addTopic} from '../../store/actions/topic';

class BoardContainer extends Component {
 
  componentDidMount(){
    this.props.fetchBoards().then(() => {
      const id = this.props.match.params.id
      this.props.getBoard(id)      
    })
  }

  componentWillUnmount(){
    this.props.clearBoard()
  }
  

  submitHandler=(e)=>{
    const id = this.props.match.params.id
    const {addTopic, topicTitle} = this.props
    e.preventDefault()
    addTopic(topicTitle, id)
  }

  render() {
    const {board, fetchTopicTitle, topicTitle, removeBoard, history } = this.props
  return <>{board && <Board 
                      data={board} 
                      boardId={this.props.match.params.id}
                      submitHandler={this.submitHandler}
                      fetchTopicTitle={fetchTopicTitle}
                      topicTitle={topicTitle}
                      removeBoard={removeBoard}
                      history={history}
                      
    />}</>
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    boardTitle: state.board.boardTilte,
    topicTitle: state.formData.topicTitle
  }
}


export default connect(mapStateToProps, {getBoard, fetchBoards, fetchTopicTitle, addTopic, clearBoard, removeBoard})(BoardContainer);