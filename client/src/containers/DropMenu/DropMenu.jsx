import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropdownHandler } from '../../store/actions/dropdown';
import DropDown from '../../components/DropMenu'
import { renderBoardSMenu, renderBoardMenu, renderTopicMenu } from './menuData';
import { removeBoard, removeTopic } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import {withRouter} from 'react-router-dom'; 

class DropDownContainer extends Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    const { dropdownHandler } = this.props
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      dropdownHandler(false)
    } else {
      dropdownHandler(true)
    }
  }

  render() {
    const { modalHandler, dropdownHandler, removeBoard, removeTopic, topic, history, board, isOpen } = this.props
    const boardsItems = renderBoardSMenu(modalHandler)
    const boardItems = board && renderBoardMenu(removeBoard, modalHandler, board._id, history)
    const topicItems = topic && renderTopicMenu(removeTopic, modalHandler, topic._id)
    return <div ref={this.setWrapperRef}>
      <DropDown isOpen={isOpen}
        boardItems={boardItems}
        topicItems={topicItems}
        boardsItems={boardsItems} 
        dropdownHandler={dropdownHandler}
        board={board}
        topic={topic}
      />
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.dropdown.isOpen,
    topic: state.board.topic,
    board: state.board.board
  }
}

export default connect(mapStateToProps, { dropdownHandler, removeBoard, removeTopic, modalHandler })(withRouter(DropDownContainer))

