import React, { Component } from 'react';
import TopicForm from '../../components/Modal/Froms/TopicForm';
import BoardForm from '../../components/Modal/Froms/BoardForm'
import BoardsForm from '../../components/Modal/Froms/BoardsForm';
import { connect } from 'react-redux';
import {
  addBoard, addTopicAction, addListItemAction, fetchBoardTitleEdit, fetchTopicTitleEdit,
  eidtBoardTitleAction, updateTopicAction, updateListItemAction, fetchListItemTitleEdit,
} from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import submitData from './submitData';
import {reduxForm} from 'redux-form'; 
import {compose} from 'recompose'; 

class Form extends Component {

  submitHandler = e => {
    e.preventDefault()
    submitData({...this.props })
  }

  fetchItem = id => {
    const { topic } = this.props
    const index = topic.list.findIndex(item => item._id === id)
    return topic.list[index]
  }

  render() {
    const { modalType, id } = this.props

    switch (modalType) {
      case 'topicModal':
        return <TopicForm {...this.props} item={this.fetchItem(id)} handleSubmit={this.submitHandler} />
      case 'boardModal':
        return <BoardForm {...this.props} handleSubmit={this.submitHandler} />
      case 'boardsModal':
        return <BoardsForm {...this.props} handleSubmit={this.submitHandler} />
      default: return 'what is this?'
    }
  }
}

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType,
    board: state.board.board,
    topic: state.board.topic,
    edit: state.modal.edit,
    id: state.modal.id,
    form: state.form.modal
  }
}

export default compose(
  reduxForm({form: 'modal'}),
  connect(mapStateToProps,
    {
      addBoard, addTopicAction, addListItemAction, modalHandler,
      fetchBoardTitleEdit, fetchTopicTitleEdit, eidtBoardTitleAction,
      updateTopicAction, updateListItemAction, fetchListItemTitleEdit
    })
)
  (Form);