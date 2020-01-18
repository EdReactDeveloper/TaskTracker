import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Topic from './Topic';
import { getBoard, fetchBoards, clearBoard } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import Loader from '../../components/misc/Loader/Lines';
import { boardTypes, boardsTypes } from '../PropTypes';
import NotFound from '../../components/404';

class BoardContainer extends Component {

  componentDidMount() {
    const { match, getBoard } = this.props
    const { id } = match.params
    getBoard(id)
  }

  componentWillUnmount() {
    const { clearBoard } = this.props
    clearBoard()
  }

  render() {
    const { board, loading } = this.props
    if(board && !loading){
      return <Topic {...this.props} />
    }
    if(!board && !loading){
      return <NotFound {...this.props} />
    }
    return  <Loader />
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    loading: state.board.loading,
    boards: state.board.boards
  }
}

BoardContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  boards: boardsTypes,
  board: boardTypes,
  getBoard: PropTypes.func.isRequired,
  fetchBoards: PropTypes.func.isRequired,
  modalHandler:PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
}

BoardContainer.defaultProps = {
  board: {},
  boards: []
}

export default connect(mapStateToProps, { getBoard, fetchBoards, modalHandler, clearBoard })(BoardContainer);