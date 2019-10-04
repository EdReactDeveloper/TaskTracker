import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Topic from '../../components/Board/Topic';
import { modalHandler } from '../../store/actions/modal';

const TopicContainer =(props)=> <Topic {...props} />
  
const mapStateToProps = state => {
  return {
    topic: state.board.topic,
    editMode: state.modal.editMode,
    board: state.board.board
  }
}

TopicContainer.protoTypes={
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
  }).isRequired,
}

export default connect(mapStateToProps, { modalHandler })(TopicContainer);
