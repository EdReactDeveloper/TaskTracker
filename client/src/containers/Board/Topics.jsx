import React, { Component } from 'react';
import Topics from '../../components/Board/Topics'
import { connect } from 'react-redux';
import { getTopics, addListItem } from '../../store/actions/board';
import Modal from '../../components/misc/Modal'
import AddTopicItemForm from '../../components/Board/Topics/Topic/TopicForm/TopicForm'
import { fetchTopicItemTitle, fetchTopicItmeDescription } from '../../store/actions/forms';
import { modalHandler } from '../../store/actions/modal';


class TopicsContainer extends Component {
  constructor(props) {
    super(props)
    this.modalType = 'topicModal'
  }

  submitHandler = (e) => {
    e.preventDefault()
    const { addListItem, modalHandler, topicItemDescription, topicItemTitle, topicId } = this.props
    addListItem(topicId, topicItemTitle, topicItemDescription)
    modalHandler(this.modalType)
  }


  render() {
    const {
      topics,
      isModalOpen,
      topicItemDescription,
      topicItemTitle,
      modalHandler,
      fetchTopicItemTitle,
      fetchTopicItmeDescription
    } = this.props
    return <>
      {topics && <Topics topics={topics} modalType={this.modalType} />}
      {isModalOpen &&
        <Modal
          modalHandler={modalHandler}
          modalType={this.modalType}
          submitHandler={this.submitHandler}>
          <AddTopicItemForm
            topicItemDescription={topicItemDescription}
            topicItemTitle={topicItemTitle}
            fetchTopicItemTitle={fetchTopicItemTitle}
            fetchTopicItmeDescription={fetchTopicItmeDescription}
          />
        </Modal>}
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