import React, { Component } from 'react'
import { connect } from 'react-redux';
import Topic from '../../components/Board/Topic';
import { modalHandler } from '../../store/actions/modal';
import { getTopic } from '../../store/actions/board';
import { boardTypes } from '../PropTypes';

class TopicContainer extends Component {

  componentDidMount() {
    const { getTopic, match } = this.props
    const { topicId, id } = match.params
    if (id && topicId) {
      getTopic({ boardId: id, topicId })
    }
  }

  componentDidUpdate(prevProps) {
    const { getTopic, match } = this.props
    const { topicId, id } = match.params
    if (prevProps.match.params.topicId !== topicId) {
      if (id && topicId) {
        getTopic({ boardId: id, topicId })
      }
    }
  }

  render() {
    const { board, loading } = this.props
    return (board && !loading ) && <Topic {...this.props} />
  }

}
const mapStateToProps = state => {
  return {
    topic: state.board.topic,
    editMode: state.modal.editMode,
    board: state.board.board,
    loading: state.board.loading,
  }
}


TopicContainer.protoTypes = {
  board: boardTypes
}

export default connect(mapStateToProps, { modalHandler, getTopic })(TopicContainer);
