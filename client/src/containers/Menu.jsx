import React, { Component } from 'react';
import Menu from '../components/DropMenu/DropMenu'
import { connect } from 'react-redux';
import { modalHandler } from '../store/actions/modal';
import { removeBoard, removeTopic } from '../store/actions/board';
import { renderBoardSMenu, renderBoardMenu, renderTopicMenu } from './menuData';

class MenuContainer extends Component {
  render() {
    const { modalHandler, removeBoard, history, removeTopic, modal_id, topic, board } = this.props
    const boardsItems = renderBoardSMenu(modalHandler)
    const boardItems = board && renderBoardMenu(removeBoard, modalHandler, board._id, history)
    const topicItems = renderTopicMenu(removeTopic, modalHandler, modal_id)
    return <Menu
      boardItems={boardItems}
      topicItems={topicItems}
      boardsItems={boardsItems}
      modalHandler={modalHandler}
      history={history}
      topic={topic}
      board={board}
      removeTopic={removeTopic}
      removeBoard={removeBoard}
      modal_id={modal_id}

    />
  }
}

const mapStateToProps = state => {
  return {
    modal_id: state.modal.id,
    topic: state.board.topic,
    board: state.board.board
  }
}

export default connect(mapStateToProps, { removeBoard, removeTopic, modalHandler })(MenuContainer);