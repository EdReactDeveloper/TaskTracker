import React, { Component } from 'react';
import Nav from '../components/Nav'
import {connect} from 'react-redux'; 
import {modalHandler} from '../store/actions/modal'; 

class NavContainer extends Component {
  render() {
    const {history, board, modalHandler} = this.props
    return <Nav history={history} board={board} modalHandler={modalHandler}/>
  }
}

const mapStateToProps = state => {
  return {
    history: state.board.history,
    board: state.board.board
  }
}

export default connect(mapStateToProps, {modalHandler})(NavContainer);