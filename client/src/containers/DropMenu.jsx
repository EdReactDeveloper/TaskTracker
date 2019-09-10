import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropdownHandler } from '../store/actions/dropdown';
import DropDown from '../components/DropMenu'
import { renderBoardSMenu, renderBoardMenu, renderTopicMenu } from './menuData';
import { removeBoard, removeTopic } from '../store/actions/board';
import { modalHandler } from '../store/actions/modal';


/**
 * Component that alerts if you click outside of it
 */
class DropDownContainer extends Component {

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside = (event) => {
    const { dropdownHandler, isOpen } = this.props
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      dropdownHandler(false)
    } else {
      dropdownHandler(true)
      
    }
  }

  render() {
    const { modalHandler, dropdownHandler, removeBoard, history, removeTopic, topic, board, isOpen } = this.props
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
    board: state.board.board,
    history: state.board.history
  }
}

export default connect(mapStateToProps, { dropdownHandler, removeBoard, removeTopic, modalHandler })(DropDownContainer)

