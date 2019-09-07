import React, { Component } from 'react';
import Boards from '../components/Boards';
import { connect } from 'react-redux';
import { fetchBoards, addBoard } from '../store/actions/board';
import { fetchBoardTitle } from '../store/actions/forms'
import Loader from '../components/misc/Loader'; 
import Modal from '../components/misc/Modal';
import {modalHandler} from '../store/actions/modal'; 
import Form from '../components/Boards/BoardsForm'; 

class BoardsContainer extends Component {

  constructor(props){
    super(props)
    this.modalType = 'boardsModal'
  }

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
      boardTitle, modalHandler, modal } = this.props
    return <>
      {boards && !loading ? <Boards
        boards={boards}
        addBoard={addBoard}
        boardTitle={boardTitle}
        fetchBoardTitle={fetchBoardTitle}
        sumbitHanlder={this.sumbitHanlder}
        modalType={this.modalType}
        modalHandler={modalHandler}
      /> : <Loader />}
      {modal && <Modal modalHandler={modalHandler} modalType={this.modalType} submitHandler={this.sumbitHanlder}>
        <Form />
      </Modal>}
    </>
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    loading: state.board.loading,
    boardTitle: state.forms.boardTitle,
    modal: state.modal.boardsModal
  }
}

export default connect(mapStateToProps, { fetchBoards, addBoard, fetchBoardTitle, modalHandler })(BoardsContainer);