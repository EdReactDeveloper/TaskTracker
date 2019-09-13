import React, { Component } from 'react';
import Board from '../../components/Board';
import { connect } from 'react-redux';
import { getBoard, fetchBoards, clearBoard } from '../../store/actions/board';
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
    const { board, loading } = this.props
    if(board && !loading){
      return <Board />
      }else if(!board && loading ){
        return <Loader />
      }else{
        return 'no board'
      }        
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    topicTitle: state.forms.topicTitle,
    loading: state.board.loading,
  }
}

export default connect(mapStateToProps, { getBoard, fetchBoards, addTopic, clearBoard, modalHandler })(BoardContainer);