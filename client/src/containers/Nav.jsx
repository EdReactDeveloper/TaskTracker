import React, { Component } from 'react';
import Nav from '../components/Nav'
import {connect} from 'react-redux'; 

class NavContainer extends Component {
  render() {
    const {history, board} = this.props
    return <Nav history={history} board={board}/>
  }
}

const mapStateToProps = state => {
  return {
    history: state.board.history,
    board: state.board.board
  }
}

export default connect(mapStateToProps)(NavContainer);