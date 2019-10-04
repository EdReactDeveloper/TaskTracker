/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dropdownHandler from '../../store/actions/dropdown';
import DropDown from '../../components/DropMenu'
import { renderBoardSMenu, renderBoardMenu, renderTopicMenu } from './menuData';
import { removeBoardAction, removeTopicAction } from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';

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
    const { isOpen, dropdownHandler } = this.props
    dropdownHandler(!isOpen)
  }

  onClickOutsideHandler(event) {
    const { isOpen, dropdownHandler } = this.props
    if (isOpen && !this.toggleContainer.current.contains(event.target)) {
      dropdownHandler(false)
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

DropDownContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  topic: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    boardId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        topicId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        done: PropTypes.bool.isRequired,
      })
    )
  }),
  board: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        boardId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(
          PropTypes.shape({
            _id: PropTypes.string.isRequired,
            topicId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            done: PropTypes.bool.isRequired,
          })
        )
      })
    ).isRequired
  }),
}

DropDownContainer.defaultProps={
  board: {},
  topic: {}
}

const mapStateToProps = state => {
  return {
    isOpen: state.dropdown.isOpen,
    topic: state.board.topic,
    board: state.board.board
  }
}

export default connect(mapStateToProps, { dropdownHandler, removeBoardAction, removeTopicAction, modalHandler })(withRouter(DropDownContainer))

