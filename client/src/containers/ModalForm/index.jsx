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
    const { dispatch } = this.props
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    dispatch(initialize('modal', initialValues))
   
  }
  
  componentWillUnmount(){
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
  }

  initializeFields = () => {
    const { initialValues, board, topic, itemId, formPage } = this.props
    initialValues.boardTitle = board && board.title
    initialValues.topicTitle = topic && topic.title
    if (formPage === 'topic' && itemId) {
      initialValues.itemTitle = this.fetchItem(itemId).title
      initialValues.itemDescription = this.fetchItem(itemId).description
    }
    return initialValues
  }


  submitHandler = e => {
    e.preventDefault()
    submitData({ ...this.props })
  }

  render() {
    const { modalForm: {formPage} } = this.props

    switch (formPage) {
      case 'TOPIC':
        return <TopicForm {...this.props} handleSubmit={this.submitHandler} />
      case 'BOARD':
        return <BoardForm {...this.props} handleSubmit={this.submitHandler} />
      case 'BOARDS':
        return <BoardsForm {...this.props} handleSubmit={this.submitHandler} />
      default: return 'what is this?'
    }
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    topic: state.board.topic,
    edit: state.modal.edit,
    id: state.modal.id,
    modalForm: state.modal.form,
    form: state.form.modal,
    initialValues: {}
  }
}

export default compose(
  reduxForm({ form: 'modal', enableReinitialize: true }),

  connect(mapStateToProps,
    {
      addBoard, addTopicAction, addListItemAction, modalHandler,
      eidtBoardTitleAction, updateTopicAction, updateListItemAction,
    })
)(Form);