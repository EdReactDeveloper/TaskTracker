import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicForm from './TopicForm';
import BoardForm from './BoardForm'
import BoardsForm from './BoardsForm';
import {
  addBoard, addTopicAction, addListItemAction,
  eidtBoardTitleAction, updateTopicAction, updateListItemAction
} from '../../../store/actions/board';
import { modalHandler } from '../../../store/actions/modal';

class Form extends Component {

  componentDidMount() {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
  }


  render() {
    const { modalForm: { formPage } } = this.props

    switch (formPage) {
      case 'TOPIC':
        return <TopicForm {...this.props} />
      case 'BOARD':
        return <BoardForm {...this.props} />
      case 'BOARDS':
        return <BoardsForm {...this.props} />
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

export default connect(mapStateToProps,
  {
    addBoard, addTopicAction, addListItemAction, modalHandler,
    eidtBoardTitleAction, updateTopicAction, updateListItemAction,
  })(Form);