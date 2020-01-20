import React, { Component } from 'react';
import { connect } from 'react-redux';
import Move from '../../../components/Modal/Froms/TopicForm/Move';
import Form from '../../../components/Modal/Froms/TopicForm/Form';
import { FORM_TYPE } from '../../../components/misc/configs';
import { addListItemAction, updateListItemAction, moveListItemAction } from '../../../store/actions/board';
import { modalHandler } from '../../../store/actions/modal';

class TopicForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      msg: '',
      moveToId: null
    }
  }

  componentDidMount() {
    const { modalForm: { itemId } } = this.props
    if (itemId) {
      this.initializeFields(itemId)
    }
  }

  initializeFields = (id) => {
    const item = this.fetchItem(id)
    const { title, description } = item
    this.setState({ title, description })
  }

  fetchItem = id => {
    const { topic } = this.props
    const index = topic.list.findIndex(item => item._id === id)
    return topic.list[index]
  }


  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value, msg: '' })

  
  titleNoRepeat = () => {
    const { topic } = this.props
    const { title } = this.state
    if (title.length > 0) {
      return topic.list.filter(item => item.title === title).length < 1
    }
    return true
  }


  handleSubmit = (e) => {
    e.preventDefault()

    const { modalForm: { formType, itemId }, topic, addListItemAction, updateListItemAction, modalHandler } = this.props
    const { title, description } = this.state
    const noRepeat = this.titleNoRepeat()

    if (noRepeat) {

      if (formType === FORM_TYPE.add) {
        addListItemAction(topic._id, title, description)
      } else {
        updateListItemAction({ itemId, topicId: topic._id, title, description }, 'edit')
      }

      modalHandler()
    } else {
      this.setState({ msg: 'this title already exists' })
    }

  }


  handleMoveSubmit = (e) => {
    e.preventDefault()
    const { modalForm: { formType, itemId }, moveListItemAction, modalHandler } = this.props
    const { moveToId } = this.state
    if (formType === FORM_TYPE.move) {
      moveListItemAction({ item: this.fetchItem(itemId), moveToId }, 'move');
      modalHandler()
    }
  }

  selectItemHandler = (id) => {
    this.setState({ moveToId: id })
  }


  renderForm = () => {
    const { modalForm: { formType }, boards } = this.props
    if (formType === FORM_TYPE.add || formType === FORM_TYPE.edit) {
      return <Form {...this.state} onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} />
    }
    if (formType === FORM_TYPE.move) {
      return <Move boards={boards} selectItem={this.selectItemHandler} handleSubmit={this.handleMoveSubmit} {...this.state} />
    }
    return null
  }

  render() {
    return this.renderForm()
  }
};

const mapStateToProps = state => {
  return {
    modalForm: state.modal.form,
    topic: state.board.topic,
    boards: state.board.boards
  }
}

export default connect(mapStateToProps, { addListItemAction, updateListItemAction, moveListItemAction, modalHandler })(TopicForm);