import React, { Component } from 'react';
import Topics from '../../components/Board/Topics'
import { connect } from 'react-redux';
import { getTopics, addListItem } from '../../store/actions/board';
import { fetchTopicItemTitle, fetchTopicItmeDescription } from '../../store/actions/forms';
import { modalHandler } from '../../store/actions/modal';


class TopicsContainer extends Component {
  constructor(props) {
    super(props)
    this.modalType = 'topicModal'
  }

  render() {
    const {
      topics
    } = this.props
    return <>
      {topics && <Topics topics={topics} modalType={this.modalType} />}
    </>
  }
}

const mapStateToProps = state => {
  return {
    topics: state.board.board.topics,
    isModalOpen: state.modal.topicModal,
    topicItemTitle: state.forms.topicItemTitle,
    topicItemDescription: state.forms.topicItemDescription,
    topicId: state.modal.id
  }
}

export default connect(mapStateToProps, {
  getTopics, addListItem, modalHandler, fetchTopicItemTitle,
  fetchTopicItmeDescription
})(TopicsContainer);