import React from 'react';
import TopicForm from '../../components/Modal/Froms/TopicForm';
import BoardForm from '../../components/Modal/Froms/BoardForm'
import BoardsForm from '../../components/Modal/Froms/BoardsForm';
import { connect } from 'react-redux';
import {
  fetchTopicItemTitle,
  fetchTopicItmeDescription,
  fetchTopicTitle,
  fetchBoardTitle
} from '../../store/actions/forms';
import {
  addBoard,
  addTopic,
  addListItem,
  fetchBoardTitleEdit,
  fetchTopicTitleEdit,
  updateBoardAction,
  updateTopicAction,
  updateListItem,
  fetchListItemTitleEdit,
  
} from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import submitData from './submitData'; 

const Form = (props) => {

const { modalType, topic, id } = props

  const submitHandler = e => {
    e.preventDefault()
   submitData({...props})
  }

  const fetchItem = id => {
    const index = topic.list.findIndex(item => item._id === id)
    return topic.list[index]
  }

  switch (modalType) {
    case 'topicModal':
      return <TopicForm {...props} item={fetchItem(id)} submitHandler={submitHandler} />
    case 'boardModal':
      return <BoardForm {...props} submitHandler={submitHandler} />
    case 'boardsModal':
      return <BoardsForm {...props} submitHandler={submitHandler} />
    default: return 'what is this?'
  }
};

const mapStateToProps = state => {
  return {
    topicItemTitle: state.forms.topicItemTitle,
    topicItemDescription: state.forms.topicItemDescription,
    topicTitle: state.forms.topicTitle,
    boardTitle: state.forms.boardTitle,
    modalType: state.modal.modalType,
    board: state.board.board,
    topic: state.board.topic,
    edit: state.modal.edit,
    id: state.modal.id
  }
}

export default connect(mapStateToProps,
  {
    fetchTopicItemTitle,
    fetchTopicItmeDescription,
    fetchTopicTitle,
    fetchBoardTitle,
    addBoard,
    addTopic,
    addListItem,
    modalHandler,
    fetchBoardTitleEdit,
    fetchTopicTitleEdit,
    updateBoardAction,
    updateTopicAction,
    updateListItem,
    fetchListItemTitleEdit
  })(Form);