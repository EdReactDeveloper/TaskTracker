import React, { Component } from 'react';
import Boards from '../components/Boards';
import { connect } from 'react-redux';
import { fetchBoards, addBoard, getTopic, boardActive, getBoard } from '../store/actions/board';
import { fetchBoardTitle } from '../store/actions/forms'
import Loader from '../components/misc/Loader';
import Modal from '../components/Modal';
import { modalHandler } from '../store/actions/modal';
import Form from '../containers/modalForm';


class BoardsContainer extends Component {

  constructor(props) {
    super(props)
    this.modalType = 'boardsModal'
  }

  componentDidMount() {
    this.props.fetchBoards()
  }


  goToBoard=(index, id)=>{
    const {boardActive, getBoard} = this.props
    boardActive(index)
    getBoard(id)
  }

  render() {
    const {
      boards,
      loading,
      addBoard,
      fetchBoardTitle,
      boardTitle, modalHandler, isOpen, getTopic, boardActive, history } = this.props
      console.log(boards, loading)
    return <>
      {boards && !loading ? <Boards
        boards={boards}
        getTopic={getTopic}
        addBoard={addBoard}
        boardTitle={boardTitle}
        fetchBoardTitle={fetchBoardTitle}
        modalType={this.modalType}
        modalHandler={modalHandler}
        boardActive={boardActive}
        goToBoard={this.goToBoard}
        history={history}
      /> : <Loader />}
      {isOpen && <Modal modalHandler={modalHandler} modalType={this.modalType}>
        <Form modalType={this.modalType} boardId={this.props.match.params.id}/>
      </Modal>}
    </>
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    loading: state.board.loading,
    boardTitle: state.forms.boardTitle,
    isOpen: state.modal.isOpen
  }
}

export default connect(mapStateToProps, { 
  fetchBoards, 
  getBoard, 
  getTopic, 
  boardActive, 
  addBoard, 
  fetchBoardTitle, 
  modalHandler 
})(BoardsContainer);