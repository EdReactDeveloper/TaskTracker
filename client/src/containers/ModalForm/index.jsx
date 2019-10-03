import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm, initialize } from 'redux-form';
import TopicForm from '../../components/Modal/Froms/TopicForm';
import BoardForm from '../../components/Modal/Froms/BoardForm'
import BoardsForm from '../../components/Modal/Froms/BoardsForm';
import {
  addBoard, addTopicAction, addListItemAction,
  eidtBoardTitleAction, updateTopicAction, updateListItemAction
} from '../../store/actions/board';
import { modalHandler } from '../../store/actions/modal';
import submitData from './submitData';

class Form extends Component {

  componentDidMount() {
    const initialValues = this.initializeFields()
    const {dispatch} = this.props
    dispatch(initialize('modal', initialValues))
  }

  initializeFields = () => {
    const { initialValues, board, topic, id, modalType } = this.props
    initialValues.boardTitle = board && board.title
    initialValues.topicTitle = topic && topic.title
    if (modalType === 'topicModal' && id) {
      initialValues.itemTitle = this.fetchItem(id).title
      initialValues.itemDescription = this.fetchItem(id).description
    }
    return initialValues
  }

  submitHandler = e => {
    e.preventDefault()
    submitData({ ...this.props })
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
    form: state.form.modal,
    initialValues: {}
  }
}

export default compose(
  reduxForm({ form: 'modal', enableReinitialize: true }),

  connect(mapStateToProps,
    {
      addBoard, addTopicAction, addListItemAction, modalHandler,
      eidtBoardTitleAction, updateTopicAction, updateListItemAction
    })
)(Form);