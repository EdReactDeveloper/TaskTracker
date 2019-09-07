import React, { Component } from 'react';
import Board from '../../components/Board';
import {connect} from 'react-redux'; 
import {getBoard, fetchBoards, clearBoard, removeBoard } from '../../store/actions/board';
import {fetchTopicTitle} from '../../store/actions/forms';
import {addTopic} from '../../store/actions/board';
import {modalHandler} from '../../store/actions/modal'; 
import Loader from '../../components/misc/Loader'; 
import Modal from '../../components/misc/Modal'; 
import BoardForm from '../../components/Board/BoardForm';

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
    const {board, fetchTopicTitle, topicTitle, removeBoard, history, modalHandler, modal, loading } = this.props
  return <>{board && !loading  ? <Board 
                      data={board} 
                      boardId={this.props.match.params.id}
                      submitHandler={this.submitHandler}
                      fetchTopicTitle={fetchTopicTitle}
                      topicTitle={topicTitle}
                      removeBoard={removeBoard}
                      history={history}
                      modalType={this.modalType}
                      modalHandler={modalHandler} 
    /> : <Loader/>
    
  }
   {modal &&
      <Modal 
      modalHandler={modalHandler} 
      modalType={this.modalType} 
      submitHandler={this.submitHandler}>
        <BoardForm 
        topicTitle={topicTitle} 
        fetchTopicTitle={fetchTopicTitle} 
        modalHandler={modalHandler} 
        />        
      </Modal>
    }
  </>
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    boardTitle: state.board.boardTilte,
    topicTitle: state.forms.topicTitle,
    modal: state.modal.boardModal,
    loading: state.board.loading
  }
}


export default connect(mapStateToProps, {getBoard, fetchBoards, fetchTopicTitle, addTopic, clearBoard, modalHandler, removeBoard})(BoardContainer);