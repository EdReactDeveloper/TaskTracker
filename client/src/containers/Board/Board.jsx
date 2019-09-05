import React, { Component } from 'react';
import Board from '../../components/Boards/Board';
import {connect} from 'react-redux'; 
import {getBoard, fetchBoards, clearBoard, removeBoard } from '../../store/actions/board';
import {fetchTopicTitle} from '../../store/actions/formData';
import {addTopic} from '../../store/actions/topic';
import {modalHandler} from '../../store/actions/modal'; 

class BoardContainer extends Component {
 
  constructor(props){
    super(props)
    this.modalType = 'boardModal'
  }

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
    const {addTopic, topicTitle, modalHandler} = this.props
    e.preventDefault()
    addTopic(topicTitle, id)
    modalHandler(this.modalType)
  }

  render() {
    const {board, fetchTopicTitle, topicTitle, removeBoard, history, modalHandler, modal } = this.props
  return <>{board && <Board 
                      data={board} 
                      boardId={this.props.match.params.id}
                      submitHandler={this.submitHandler}
                      fetchTopicTitle={fetchTopicTitle}
                      topicTitle={topicTitle}
                      removeBoard={removeBoard}
                      history={history}
                      modalHandler={modalHandler}
                      modal={modal}
                      modalType={this.modalType}
    />}</>
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    boardTitle: state.board.boardTilte,
    topicTitle: state.formData.topicTitle,
    modal: state.modal.boardModal
  }
}


export default connect(mapStateToProps, {getBoard, fetchBoards, fetchTopicTitle, addTopic, clearBoard, modalHandler, removeBoard})(BoardContainer);