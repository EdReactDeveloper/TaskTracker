import React, { Component } from 'react';
import Boards from '../components/Boards/Boards';
import { connect } from 'react-redux';
import { fetchBoards } from '../store/actions/board';

class BoardsContainer extends Component {

  componentDidMount() {
    this.props.fetchBoards()
  }

  render() {
    const { boards, loading } = this.props
    return <>
      {boards && !loading ? <Boards boards={boards}/> : loading}
    </>
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    loading: state.board.loading
  }
}

export default connect(mapStateToProps, { fetchBoards })(BoardsContainer);