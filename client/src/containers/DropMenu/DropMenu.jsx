import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropdownHandler } from '../../store/actions/dropdown';
import DropDown from '../../components/DropMenu'
import { renderBoardSMenu, renderBoardMenu, renderTopicMenu } from './menuData';
import { removeBoardAction, removeTopicAction } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import { withRouter } from 'react-router-dom';

class DropDownContainer extends Component {

  constructor(props) {
    super(props);
    this.toggleContainer = React.createRef();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.props.dropdownHandler(!this.props.isOpen)
  }

  onClickOutsideHandler(event) {
    if (this.props.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.props.dropdownHandler(false)
    }
  }

  render() {
    const { modalHandler, removeBoardAction, removeTopicAction, topic, history, board } = this.props
    const boardsItems = renderBoardSMenu(modalHandler)
    const boardItems = board && renderBoardMenu(removeBoardAction, modalHandler, board._id, history)
    const topicItems = topic && renderTopicMenu(removeTopicAction, modalHandler, topic._id)
    return <DropDown {...this.props}
      boardItems={boardItems}
      topicItems={topicItems}
      boardsItems={boardsItems}
      onClickHandler={this.onClickHandler}
      toggleContainer={this.toggleContainer}
    />
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

