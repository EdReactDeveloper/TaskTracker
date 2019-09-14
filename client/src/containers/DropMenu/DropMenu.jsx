import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropdownHandler } from '../../store/actions/dropdown';
import DropDown from '../../components/DropMenu'
import { renderBoardSMenu, renderBoardMenu, renderTopicMenu } from './menuData';
import { removeBoardAction, removeTopicAction } from '../../store/actions/board';
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
    const { modalHandler, removeBoardAction, removeTopicAction, topic, history, board } = this.props
    const boardsItems = renderBoardSMenu(modalHandler)
    const boardItems = board && renderBoardMenu(removeBoardAction, modalHandler, board._id, history)
    const topicItems = topic && renderTopicMenu(removeTopicAction, modalHandler, topic._id)
    return <div ref={this.setWrapperRef}>
      <DropDown {...this.props}
        boardItems={boardItems}
        topicItems={topicItems}
        boardsItems={boardsItems} 
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

export default connect(mapStateToProps, { dropdownHandler, removeBoardAction, removeTopicAction, modalHandler })(withRouter(DropDownContainer))

